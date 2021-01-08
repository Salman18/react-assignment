import React, {useState, useEffect} from 'react';
import './App.css';
import Search from './components/Search';
import Card from './components/Card';


function App() {

    const [searchValue, setSearchValue] = useState("");
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    const fetchData = async () => {
        if (searchValue.length >= 4 && searchValue !== '') {
            try {
                const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyCtcx9u7I0aoDcM10WnrPKEgwegN1WJ7K0&cx=018264299595958242005:dvs2adlrsca&q=${searchValue}`, {
                    method: "GET"
                });
                const data = await response.json();
                await setItems(data.items);
                setLoading(false);
            } catch (e) {
                setLoading(true);
            }
        }
    };

    useEffect(() => {
        fetchData();
    }, [searchValue]);

    return (
        <div className="App">
            <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
            {loading ?
                <div>
                    {'No Search Rsults'} </div> : <div>
                    {
                        items?.map(item => {
                            return <Card {...item}/>
                        })
                    }
                </div>
            }
        </div>
    );
}

export default App;
