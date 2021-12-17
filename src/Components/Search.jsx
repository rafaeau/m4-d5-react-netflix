import React from "react"

class Search extends React.Component {

    state = {
        films: [],
    }
    
    fetchData = async () => {
        try {
            let response = await fetch ('http://www.omdbapi.com/?i=tt3896198&apikey=90a4fd52')
            console.log('RESPONSE', 'response')
            if (response.ok) {
                let data = await response.json()
                console.log(data)

                this.setState({
                    films: data,
                })

            } else {
                console.log('error')
            }
        } catch (error) {
            console.log('error')
        }
    }

    componentDiMount = async () => {
        this.fetchData()
    }
    
    render() {
        return (
            <>
            </>
        )
    }
}


export default Search