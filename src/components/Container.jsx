export const Container = ({ children, className = '' }) => {
    return (
        <div className={`${className} max-w-[88rem] mx-auto md:px-10`}>
            {children}
        </div>
    )
}