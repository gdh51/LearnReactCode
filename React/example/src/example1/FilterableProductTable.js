import React from 'react'
import { SearchBar } from './SearchBar'
import { ProductTable } from './ProductTable'

export class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tableData: [],

            searchText: '',
            isOnlyStock: false,
        }
    }

    onSearchTextChange(v) {
        this.setState({
            searchText: v,
        })
    }

    onStockStatusChange(v) {
        this.setState({
            isOnlyStock: !!v,
        })
    }

    render() {
        const { searchText, isOnlyStock } = this.state,
            filterableProducts = this.state.tableData.filter(
                (product) => product.stocked === isOnlyStock
            )

        return (
            <div>
                <SearchBar
                    searchText={searchText}
                    isOnlyStock={isOnlyStock}
                    onSearchTextChange={(e) =>
                        this.onSearchTextChange(e.target.value)
                    }
                    onStockStatusChange={(e) => {
                        this.onStockStatusChange(e.target.checked)
                    }}
                />
                <ProductTable products={filterableProducts} />
            </div>
        )
    }
    componentDidMount() {
        this.setState({
            tableData: [
                {
                    category: 'Sporting Goods',
                    price: '$49.99',
                    stocked: true,
                    name: 'Football',
                },
                {
                    category: 'Sporting Goods',
                    price: '$9.99',
                    stocked: true,
                    name: 'Baseball',
                },
                {
                    category: 'Sporting Goods',
                    price: '$29.99',
                    stocked: false,
                    name: 'Basketball',
                },
                {
                    category: 'Electronics',
                    price: '$99.99',
                    stocked: true,
                    name: 'iPod Touch',
                },
                {
                    category: 'Electronics',
                    price: '$399.99',
                    stocked: false,
                    name: 'iPhone 5',
                },
                {
                    category: 'Electronics',
                    price: '$199.99',
                    stocked: true,
                    name: 'Nexus 7',
                },
            ],
        })
    }
}
