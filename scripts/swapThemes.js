const root = document.documentElement //para poder ter acesso ao root

const padronTheme = () =>  {
    root.style.setProperty ("--color-primary" ,"#3B4664")
    root.style.setProperty ("--color-second" ,"#191F32")
    root.style.setProperty ("--color-fontScreen" ,"white")
    root.style.setProperty ("--color-ballSelectedTheme" ,"orangered")
    root.style.setProperty ("--color-backgroundButtons", "#EBE3DC")
    root.style.setProperty ("--color-boxShadowButtons", "#D0C9C2")
    root.style.setProperty (" --color-numbers", "#3B4664")
    root.style.setProperty ("--color-backgroundDelet", "#3B4664")
    root.style.setProperty ("--color-backgroundResult", " #D13F30")
    root.style.setProperty ("--color-shadowDelAndReset", "#445374")
    root.style.setProperty ("--color-shadowResult", "#93261A")
    root.style.setProperty ("--color-buttons", "#3B4664")
    root.style.setProperty (" --color-fontResultReset", "white")
    root.style.setProperty ("--font-header", "white")
    root.style.setProperty ("--color-textResult", "white")
 }

 const SecondTheme = () =>  {
    root.style.setProperty ("--color-primary" ,"#E7E7E7")
    root.style.setProperty ("--color-second" ,"#D4CDCD")
    root.style.setProperty ("--color-fontScreen" ,"#191F32")
    root.style.setProperty ("--color-ballSelectedTheme" ,"orangered")
    root.style.setProperty ("--color-backgroundButtons", "#EBE3DC")
    root.style.setProperty ("--color-boxShadowButtons", "#D0C9C2")
    root.style.setProperty (" --color-numbers", "#3B4664")
    root.style.setProperty ("--color-backgroundDelet", "#377F86")
    root.style.setProperty ("--color-backgroundResult", " #D13F30")
    root.style.setProperty ("--color-shadowDelAndReset", "#1B5F65")
    root.style.setProperty ("--color-shadowResult", "#93261A")
    root.style.setProperty ("--color-buttons", "#191F32")
    root.style.setProperty ("--font-header", "#191F32")
    root.style.setProperty ("--color-textResult", "white")
 }
 
const thirdTheme = () => {
    root.style.setProperty ("--color-primary" ,"#170629")
    root.style.setProperty ("--color-second" ,"#1D0836")
    root.style.setProperty ("--font-color" ,"yellow")
    root.style.setProperty ("--color-ballSelectedTheme" ,"cyan")
    root.style.setProperty ("--color-fontScreen" ,"yellow")
    root.style.setProperty ("--color-backgroundButtons", "#341C4F")
    root.style.setProperty ("--color-boxShadowButtons", "#871C9C")
    root.style.setProperty (" --color-numbers", "#3B4664")
    root.style.setProperty ("--color-backgroundDelet", "#58077D")
    root.style.setProperty ("--color-backgroundResult", "cyan")
    root.style.setProperty ("--color-shadowDelAndReset", "#BC15F4")
    root.style.setProperty ("--color-shadowResult", "#6CF9F2")
    root.style.setProperty ("--color-buttons", "yellow")
    root.style.setProperty ("--font-header", "yellow")
    root.style.setProperty ("--color-textResult", "black")
}

   


 export function swapTheme (index) {
    if (index === 0) {
        padronTheme()
    } 
    else if (index === 1) {
        SecondTheme()
    }
    else {
        thirdTheme()
    }
}


