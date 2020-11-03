import React from 'react'

export class ProductTable extends React.Component {
    render() {
        const { products } = this.props

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p) => (
                        <tr key={p.name}>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}
