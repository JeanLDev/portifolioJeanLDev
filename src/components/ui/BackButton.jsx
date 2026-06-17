import { ChevronLeft } from "lucide-react"
import { Link } from "react-router-dom"


const BackButton = ({onBack, link=false}) => {
    if (link) {
        return (
            <Link
            to={onBack}
            className="w-fit mb-8 bg-white border-2 border-[#0F172A] rounded-2xl shadow-[8px_8px_0px_#0F172A] p-2 flex flex-row items-start gap-2 font-semibold"
            >
                <ChevronLeft/>
                Voltar
            </Link>
        )
    } else {
        return (
            <button
            onClick={onBack}
            className="flex items-center "
            >
                <ChevronLeft/>
                Voltar
            </button>
        )

    }
}
export default BackButton