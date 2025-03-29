import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            onSearch(city);
        }
        setCity('');
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            style={{ 
                display: 'flex', 
                gap: '10px', 
                padding: '15px', 
                justifyContent: 'center' 
            }}
        >
            <input 
                type="text" 
                placeholder="Enter city name..." 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                style={{ 
                    padding: '10px', 
                    border: '1px solid #ccc', 
                    borderRadius: '6px', 
                    width: '100%', 
                    maxWidth: '250px', 
                    fontSize: '16px', 
                    outline: 'none', 
                    transition: '0.3s'
                }}
                onFocus={(e) => (e.target.style.borderColor = '#1E90FF')}
                onBlur={(e) => (e.target.style.borderColor = '#ccc')}
            />
            <button 
                type="submit" 
                style={{
                    backgroundColor: '#1E90FF',
                    color: 'white',
                    border: 'none',
                    padding: '10px 15px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    transition: '0.3s',
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#007bff')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#1E90FF')}
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;
