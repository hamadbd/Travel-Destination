function Tours({ data }) {
    return (
        <>
            {
                data.map((city, index) => {
                    return (
                        <div key={index}>
                            <p>Place to visit :{city.name}</p>
                            <img src={city.image} alt="" />
                        </div>
                    )
                })
            }
        </>
    )
}

export default Tours;

