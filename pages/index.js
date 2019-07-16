import React, { Component } from 'react'

class Index extends Component {
    constructor(props) {
        super(props);
    }
    static async getInitialProps() {
        console.log("FETCHING YOUR DATA IN GETINITIALPROPS!!!!")
    }
    render() {
        return (
            <div>
                <h1>Our Index Page!!!</h1>
            </div>
        )
    }
}
// const Index = () => {
//     return (
//         <div>
//             <h1>Our Index Page!!!</h1>
//         </div>
//     )
// };
export default Index;