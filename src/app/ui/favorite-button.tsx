import { StarIcon } from "@heroicons/react/24/outline"
import { StarIcon as StarIconFull } from "@heroicons/react/24/solid"
import { signIn, useSession } from "next-auth/react"

export default function FavoriteButton({ submitWord, saved }: { submitWord: Function , saved: boolean}) {
    const session = useSession();
    
    const onClick = () => {
        if (!session.data) {
            signIn();
        } else if (!saved) {
            submitWord();
        }
    }

    return (
        <div className="h-10" onClick={onClick}>
            {!saved ? <StarIcon className="h-full"/> : <StarIconFull className="h-full" />}
        </div>
    )
}