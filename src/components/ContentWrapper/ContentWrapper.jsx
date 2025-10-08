
/*Destructure assignment af props*/
export const ContentWrapper = ({ title, description, children }) => {
    document.title = title || "Glade ruder"

    if (description) {
        const meta = document.querySelector('meta[name="description"]')
        if (meta) meta.setAttribute("content", description)
    }

    return (
        <>
            {children}
        </>
    )
}
