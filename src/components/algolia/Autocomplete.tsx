import React from "react";
import {
    createElement,
    Fragment,
    useEffect,
    useRef,
    useState,
    useMemo
} from "react";
import { render } from "react-dom";
import { createRoot } from "react-dom/client";

import { usePagination, useSearchBox } from "react-instantsearch-hooks";
import { autocomplete, AutocompleteOptions } from "@algolia/autocomplete-js";
import { BaseItem } from "@algolia/autocomplete-core";
import { Box, Input, forwardRef, Divider } from "@chakra-ui/react";
import { createLocalStorageRecentSearchesPlugin } from "@algolia/autocomplete-plugin-recent-searches";
import { createQuerySuggestionsPlugin } from "@algolia/autocomplete-plugin-query-suggestions";


import type { SearchClient } from "algoliasearch/lite";

import "@algolia/autocomplete-theme-classic";
import './autocomplete.css';

const INSTANT_SEARCH_QUERY_SUGGESTIONS = "TEDTalks_talks_v2_query_suggestions";

type AutocompleteProps = Partial<AutocompleteOptions<BaseItem>> & {
    className?: string;
    searchClient: SearchClient;
};

type SetInstantSearchUiStateOptions = {
    query: string;
};

export default function Autocomplete({
    searchClient,
    className,
    ...autocompleteProps
}: AutocompleteProps) {
    const autocompleteContainer = useRef<HTMLDivElement>(null);
    const panelRootRef = useRef(null);
    const rootRef = useRef(null);

    const { query, refine: setQuery } = useSearchBox();
    const { refine: setPage } = usePagination();
    const plugins = useMemo(() => {
        const recentSearches = createLocalStorageRecentSearchesPlugin({
            key: "instantsearch",
            limit: 3,
            transformSource({ source, onRemove }) {
                return {
                    ...source,
                    onSelect({ item }) {
                        setInstantSearchUiState({ query: item.label });
                    },
                    templates: {
                        ...source.templates,
                        header({ items, html }) {
                            if (items.length === 0) {
                                return null;
                            }

                            return (<><Box className="aa-SourceHeaderTitle">Your Recent Searches</Box>
                                <Divider className="aa-SourceHeaderLine" /></>);
                        },
                    },
                };
            }
        });
        const querySuggestions = createQuerySuggestionsPlugin({
            searchClient,
            indexName: INSTANT_SEARCH_QUERY_SUGGESTIONS,
            getSearchParams() {
                return recentSearches.data!.getAlgoliaSearchParams({
                    hitsPerPage: 6
                });
            },
            transformSource({ source }) {
                return {
                    ...source,
                    sourceId: "querySuggestionsPlugin",
                    onSelect({ item }) {
                        setInstantSearchUiState({ query: item.query });
                    },
                    templates: {
                        ...source.templates,
                        header({ items, html }) {
                            if (items.length === 0) {
                                return null;
                            }

                            return (<><Box className="aa-SourceHeaderTitle">Suggestions</Box>
                                <Divider className="aa-SourceHeaderLine" /></>);
                        },
                    },
                    getItems(params) {
                        if (!params.state.query) {
                            return [];
                        }

                        return source.getItems(params);
                    },
                };
            }
        });

        return [recentSearches, querySuggestions];
    }, []);
    const [instantSearchUiState, setInstantSearchUiState] = useState<
        SetInstantSearchUiStateOptions
    >({ query });

    useEffect(() => {
        setQuery(instantSearchUiState.query);
        setPage(0);
    }, [instantSearchUiState]);

    useEffect(() => {
        if (!autocompleteContainer.current) {
            return;
        }

        const autocompleteInstance = autocomplete({
            ...autocompleteProps,
            container: autocompleteContainer.current,
            initialState: { query },
            onReset() {
                setInstantSearchUiState({ query: "" });
            },
            onSubmit({ state }) {
                setInstantSearchUiState({ query: state.query });
            },
            onStateChange({ prevState, state }) {
                if (prevState.query !== state.query) {
                    setInstantSearchUiState({
                        query: state.query
                    });
                }
            },
            plugins,
            renderer: { createElement, Fragment, render: () => { } },
            render({ children }, root) {
                if (!panelRootRef.current || rootRef.current !== root) {
                    rootRef.current = root;
                    panelRootRef.current?.unmount();
                    panelRootRef.current = createRoot(root);
                }
                panelRootRef.current.render(children);
            },
        });

        return () => autocompleteInstance.destroy();
    }, [plugins]);

    return <Box className={className} ref={autocompleteContainer} />;
}