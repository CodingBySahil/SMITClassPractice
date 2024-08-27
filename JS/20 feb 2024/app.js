let story = "In the heart of a quaint village nestled between rolling hills, a legend whispered among the locals about an ancient artifact buried beneath the towering oak tree at the edge of the woods. Rumors spoke of its mystical powers, capable of granting the deepest desires of those who dared to seek it. Among the curious souls was young Finn, whose adventurous spirit knew no bounds. Determined to uncover the truth, he embarked on a journey through the dense foliage, guided only by the light of the full moon above.  The forest stirred with hidden mysteries as Finn pressed on, his senses heightened by the mysterious aura that surrounded him. Shadows danced between the trees, and the rustling of leaves seemed to echo ancient melodies of forgotten times. With each passing moment, the air grew thick with anticipation, as if the very essence of magic lingered just beyond his grasp.  As dawn approached, Finn stumbled upon the clearing where the legendary oak stood tall, its gnarled roots twisting into the earth like ancient guardians. With trembling hands, he began to dig, the earth yielding to his determination. Suddenly, a blinding light erupted from the ground, illuminating the forest in a dazzling display of ethereal brilliance. In that moment, Finn uncovered the artifact—a shimmering gem pulsating with untold power. With a mix of awe and trepidation, he reached out to touch it, feeling a surge of energy coursing through his veins. In that instant, the world around him shifted, and he found himself standing at the crossroads of destiny, poised to shape his own fate.  With newfound clarity, Finn realized that the true magic lay not in the artifact itself, but in the journey of self-discovery it had ignited within him. As he returned to the village, he carried with him the wisdom of the forest and the courage to embrace the unknown. And though the artifact remained a symbol of wonder, it was the lessons learned along the way that would forever guide his path forward."

let para = document.querySelector(".para");
let readLessPara = para.textContent;
let Image=document.querySelector(".picture")
// console.log(readLess)
function readMore(){
    para.textContent = story;
}
function readless(){
    para.textContent = readLessPara;
}
function changeImage(){
    Image.src = "pexels-thisisengineering-3861969.jpg"
}
function changeImageBack(){
    Image.src = "roman-synkevych-vXInUOv1n84-unsplash.jpg"
}



function searchZipCode(){
    let zipCode = document.querySelector(".input").value
    let city =document.querySelector(".city-of-zipcode")
    console.log(zipCode)
    switch (zipCode) {
        case "1":
            city.textContent = "1 is zip code of : Peshawar"
            break;
    
        case "2":
            city.textContent = "2 is zip code of : Islamabad"
            break;
        case "3":
            city.textContent = "3 is zip code of : Karachi"
            break;
        case "4":
            city.textContent = "4 is zip code of : Swat"
            break;
        case "5":
            city.textContent = "5 is zip code of : Lahore"
            break;
        case "6":
            city.textContent = "6 is zip code of : Queta"
            break;
    
        default:
            alert("Plx enter value between 1 and 6")
            break;
    }
}

