import React from 'react'

export class SearchBar extends React.Component {
    render() {
        const {
            searchText,
            isOnlyStock,
            onSearchTextChange,
            onStockStatusChange,
        } = this.props

        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchText}
                    onInput={onSearchTextChange}
                />
                <input
                    type="checkbox"
                    value={isOnlyStock}
                    onChange={onStockStatusChange}
                />
            </form>
        )
    }
}
