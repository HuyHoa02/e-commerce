import HomePage from '../pages/HomePage/HomePage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import SellerPage from '../pages/SellerPage/SellerPage'
import ProfilePage from '../pages/Profile/ProfilePage/ProfilePage'
import UserAddressPage from '../pages/Profile/UserAddressPage/UserAddressPage'
import ProfileNotification from '../pages/Profile/ProfileNotification/ProfileNotification'

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/seller',
        page: SellerPage,
        isShowHeader: true
    },
    {
        path: '/user/account/address',
        page: UserAddressPage,
        isShowHeader: true
    },
    {
        path: '/user/account/profile',
        page: ProfilePage,
        isShowHeader: true
    },
    {
        path: '/user/setting/notification',
        page: ProfileNotification,
        isShowHeader: true
    },
    {
        path: '*',
        page: NotFoundPage
    },
]