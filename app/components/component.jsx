import React from 'react';
import ReactDOM from 'react-dom';
// export default class Hello extends React.Component {
//     render () {
//         return (
//             <h1>hello world</h1>
//         );
//     }
// }
class ProductTable extends React.Component {
    constructor (props) {
        super(props);

        function unique(field, arr) {
            const s = new Set();
            arr.map(item => {
                s.add(item[field]);
            });
            return Array.from(s)
        }
        this.state = {
            categoryArr: unique('category', this.props.products)
        }
    }

    render () {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                {this.state.categoryArr.map((field) => {
                    return (
                        <tbody className="category">
                            <tr><td key={field} className="category-name" colSpan = "2">{field}</td></tr>
                            {this.props.products.map((item) => {
                                if (item.category === field) {
                                    if ((this.props.filterText !== '' && item.name.indexOf(this.props.filterText) < 0) || (this.props.onlyInStock && !item.stocked) ) {
                                        return
                                    } 
                                    var lineStyle = !item.stocked? {'color': 'red'}:{'color':'black'};
                                    return (
                                        <tr style={lineStyle}>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                        </tr>
                                    )
                                }
                            })}
                        </tbody>
                    );
                })}
            </table>
        );
    }
}
class SearchBar extends React.Component {
    constructor (props) {
        super(props);
        this.filterOutofStock = this.filterOutofStock.bind(this);
        this.changeSearchValue = this.changeSearchValue.bind(this);
    }

    filterOutofStock (e) {
        this.props.onFilterCheck(e.target.checked);
    }

    changeSearchValue (e) {
        this.props.onFilterInput(e.target.value);
    }

    render () {
        return (
            <div class="search">
                <input type = "text" className = "search-input" onChange = {this.changeSearchValue} value = {this.props.filterText} placeholder = "Search..." />
                <input type = "checkbox" onClick = {this.filterOutofStock} checked = {this.props.onlyInStock} /> Only show products in stock
            </div>
        );
    }
}
export default class FilterableProductTable extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            filterText: '',
            onlyInStock: false
        }
        this.onFilterInput = this.onFilterInput.bind(this);
        this.onFilterCheck = this.onFilterCheck.bind(this);
    }

    onFilterInput (val) {
        this.setState({
            filterText: val
        })
    }

    onFilterCheck (val) {
        this.setState ({
            onlyInStock: val
        })
    }

    render () {
        return (
            <div className = "product-area">
                <SearchBar 
                    filterText = {this.state.filterText} 
                    onlyInStock = {this.state.onlyInStock} 
                    onFilterInput = {this.onFilterInput} 
                    onFilterCheck = {this.onFilterCheck}
                />
                <ProductTable 
                    filterText = {this.state.filterText} 
                    onlyInStock = {this.state.onlyInStock}
                    products = {this.props.ordinaryList}  
                />
            </div>
        );
    }
}