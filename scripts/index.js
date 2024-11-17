const playButton = document.querySelector("#play");
const modal = document.querySelector("dialog");
const form = document.querySelector("form");

playButton.addEventListener("click", () => {
    if(!modal.innerHTML.includes("iframe")) modal.innerHTML = `
    <div>
        <iframe src="https://www.youtube.com/embed/dclaagANm20?autoplay=1&mute=1"></iframe>
    </div>
    `
    modal.showModal()
})

modal.addEventListener("click", (e) => {
    const videoContainer = modal.querySelector("div");
    if(e.target === videoContainer) modal.close()
})

form.addEventListener('submit', e => {
    e.preventDefault();
    window.location.pathname = "thankyou.html";
})

const carouselWrapper = document.querySelector("#we-understand > #wu-carousel > div.carousel-wrapper > div.carousel");
const carouselIndicators = document.querySelectorAll("#we-understand > #wu-carousel > div:last-of-type > div");
const carouselLeftArrow = document.querySelector("#we-understand > #wu-carousel > img:first-of-type");
const carouselRightArrow = document.querySelector("#we-understand > #wu-carousel > img:last-of-type");

carouselLeftArrow.addEventListener("click", () => {
    i = carouselWrapper.style.getPropertyValue('--i') | 0;
    carouselIndicators[i].classList.remove('active')
    i = (3+(--i))%3
    console.log(i)
    carouselIndicators[i].classList.add('active')
    carouselWrapper.style.setProperty('--i', i);
})

carouselRightArrow.addEventListener("click", () => {
    i = carouselWrapper.style.getPropertyValue('--i') | 0;
    carouselIndicators[i].classList.remove('active')
    i = (3+(++i))%3
    console.log(i)
    carouselIndicators[i].classList.add('active')
    carouselWrapper.style.setProperty('--i', i);
})

carouselIndicators.forEach((indicator, i) => {
    indicator.addEventListener("click", () => {
        carouselWrapper.style.setProperty('--i', i%3);
        carouselIndicators.forEach(x => {
            x.classList.remove("active")
        })
        indicator.classList.add('active')
    })
})

const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Austrian Empire*",
    "Azerbaijan",
    "Baden*",
    "Bahamas, The",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Bavaria*",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin (Dahomey)",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Brunswick and Lüneburg*",
    "Bulgaria",
    "Burkina Faso (Upper Volta)",
    "Burma",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands, The",
    "Central African Republic",
    "Central American Federation*",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo Free State, The*",
    "Cook Islands",
    "Costa Rica",
    "Cote d’Ivoire (Ivory Coast)",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia",
    "Czechoslovakia*",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Duchy of Parma, The*",
    "East Germany (German Democratic Republic)*",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Federal Government of Germany (1848-49)*",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia, The",
    "Georgia",
    "Germany",
    "Ghana",
    "Grand Duchy of Tuscany, The*",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Hanover*",
    "Hanseatic Republics*",
    "Hawaii*",
    "Hesse*",
    "Holy See",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kingdom of Serbia/Yugoslavia*",
    "Kiribati",
    "Korea",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Lew Chew (Loochoo)*",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembou>"
]

const inputs = form.querySelectorAll("input")

const dropdownInput = inputs[4]

const makeOptions = (list) => {
    const dropdown = form.querySelector(".select > .options")
    dropdown.innerHTML = ""
    list.forEach(country => {
        const option = document.createElement("div")
        option.classList = "option"
        option.innerText = country
        option.addEventListener("click", () => {
            dropdownInput.value = option.innerHTML
        })
        dropdown.appendChild(option)
    })
}

makeOptions(countries)

dropdownInput.addEventListener("keydown", e => {
    let val
    if(e.key === 'Backspace') val = e.target.value.toLowerCase().substring(0, e.target.value.length - 1)
    else val = (e.target.value + e.key).toLowerCase()
    makeOptions(countries.filter(country => country.toLowerCase().includes(val)))
})