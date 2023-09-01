function People({name, job, img}) {
    return (
        <div className="">
            <img src={img} alt={name} />
            <h2>Nome: {name}</h2>
            <p>Profissão{job}</p>

        </div>
    )
}

export default People