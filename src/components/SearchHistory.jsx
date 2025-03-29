const SearchHistory = ({ history, onSearch }) => {
    return (
        <div style={{ marginTop: '20px', width: '100%', maxWidth: '500px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px' }}>Search History</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                {history.map((city, index) => (
                    <button 
                        key={index} 
                        onClick={() => onSearch(city)} 
                        style={{
                            backgroundColor: '#ddd',
                            padding: '8px 12px',
                            borderRadius: '6px',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '14px',
                            transition: '0.3s',
                        }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = '#777')}
                        onMouseOut={(e) => (e.target.style.backgroundColor = '#999')}
                    >
                        {city}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SearchHistory;
