const Linn = ({ linn: { nimi, kirjeldus, pilt } }) => (
    <div>
        <div>{nimi}</div>
        <div>{kirjeldus}</div>
        <img src={pilt} />
    </div>
)

export default Linn;
