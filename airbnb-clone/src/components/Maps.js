
export default function Maps() {
    //Working with Javascript map()
    const nums = [1, 2, 3, 4, 5]
    const squares = nums.map(function (num) {
        return num * num
    })
    // console.log(squares)
    const names = ["alice", "bob", "charlie", "danielle"]
    const capitalized = names.map((name) => {
        return name[0].toUpperCase() + name.slice(1)
    })
    // console.log(capitalized)
    const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
    const embeded = pokemon.map((poke => {
            return `<p>${poke}</p>`;
        })
    )
    // console.log(embeded)

    return (
        <div>

        </div>
    );
}