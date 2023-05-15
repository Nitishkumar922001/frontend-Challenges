import Acrade from '../assets/images/icon-arcade.svg'
import Advanced from '../assets/images/icon-advanced.svg'
import Pro from '../assets/images/icon-pro.svg'
const addOns = [
    {
        'title': 'online service', 'info': 'Acess to multiplayer games', 'monthly': '+$1/mon', 'yearly': "+$10/yr"
    },
    {
        'title': 'Larger storage', 'info': 'Extra 1TB of cloud save', 'monthly': ' +$2/mo', 'yearly': '+$20/yr'
    },
    {
        'title': ' Customizable Profile', 'info': 'Custom theme on your profile', 'monthly': '+$2/mo', 'yearly': '+$20/yr'
    }
]

const plans = [
    // const img = [Acrade, Advanced, Pro];
    {
        'title': 'Acrade',
        'img': Acrade,
        'monthly': ' $9/mo',
        'yearly': '$90/yr'
    }
    ,

    {
        'title': 'Advanced',
        'img': Advanced,
        'monthly': '$12/mo',
        'yearly': '$120/yr'
    },

    {
        'title': 'Pro',
        'img': Pro,
        'monthly': '$15/mo',
        'yearly': ' $150/yr'
    }

]

export { addOns, plans }