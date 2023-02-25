import { socialMedia } from "../../Constants/socialMedia"

const SocialNetwork = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-4 md:gap-x-3">
            {socialMedia.map(account => (
                <div className={`flex items-center justify-center ${account.styles} text-center py-8 px-4 w-full my-2 rounded-lg`} key={account.id}>
                    {account.icon}
                    <span className="text-white text-base mr-3 font-bold font-IranSansDN">{account.title}</span>
                </div>
            ))}
        </div>
    )
}

export default SocialNetwork