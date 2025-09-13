export default function Button({ className = "", text = "Get started", }) {

    return (
        <button className={` border px-5 py-3 rounded-md border-text-secondary cursor-pointer hover:border-primary transition-colors duration-300 ${className}`}>
            {text}
        </button>
    )
} 