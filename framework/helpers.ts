export function setTitle(title: String){
    const titleElement = document.getElementById("title");
    if (titleElement) {
        titleElement.innerText = title as string;
    }
}