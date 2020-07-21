console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
    const breedDropDown = document.getElementById('breed-dropdown')
    breedDropDown.onchange = filterBreedsByFirstLetter
    fetchImages();
    fetchBreeds();
});

// #1 - images
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    function fetchImages() {
        return fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => renderImages(json));
    }

    function renderImages(images) {
        const container = document.getElementById('dog-image-container');
        images.message.forEach(image => {
            const img = document.createElement('img');
            img.src = image
            container.appendChild(img)
        })
    }

// #2 - breeds

    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    function fetchBreeds() {
        return fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => renderBreeds(json))
    }

    function renderBreeds(breeds) {
        const ul = document.getElementById('dog-breeds');
        
        Object.keys(breeds.message).forEach(function(key) {
            let breed = breeds.message[key];
            const li = document.createElement('li');
            li.innerText = key;
            li.className = 'breed';
            li.style.display = "";
            li.style.cursor = 'pointer';
            ul.appendChild(li);
            li.addEventListener('click', function() {
                console.log('breed clicked');
                if (li.style.color == '') {
                    li.style.color = 'purple';
                }else{
                    li.removeAttribute('style');
                }
                // if (!(breed.length == 0));
                // {
                //     subBreedList = document.createElement ('ul');
                //     li.appendChild(subBreedList);
                //     for (var i = 0, i < breed.length; i++);
                //     {
                //         document.create
                //         subLi = document.createElement('li');
                //         subLi.innerText = breed[i];
                //         subLi.className = 'subBreed';
                //         subBreedList.appendChild(subLi)
                //     }
                // }
            })
        })
    }

        
        function filterBreedsByFirstLetter(e) {
            const selectLetter = e.target.value;
            const breedList = document.querySelectorAll('li.breed');
            breedList.forEach(function(dogBreed) {
                if (selectLetter == "all"){
                    dogBreed.hidden = false
                } else {
                    if (dogBreed.innerHTML[0] != selectLetter) {
                        dogBreed.hidden = true
                    } else {
                        dogBreed.hidden = false
                    }
                }
            })
        }
