import { socialMedia } from "../../Constants/socialMedia"

const SocialNetwork = () => {
    return (
        <div className="flex items-center justify-between my-6 gap-x-6">
            {socialMedia.map(account => (
                <div className={`flex items-center ${account.styles} py-8 px-4 w-1/4 rounded-lg`} key={account.id}>
                    {account.icon}
                    <span className="text-white text-base mr-3 font-bold font-IranSansDN">{account.title}</span>
                </div>
            ))}
        </div>
    )
}

export default SocialNetwork