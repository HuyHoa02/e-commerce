import HomePage from '../pages/HomePage/HomePage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import SellerPage from '../pages/SellerPage/SellerPage'
import ProfilePage from '../pages/Profile/ProfilePage/ProfilePage'
import UserAddressPage from '../pages/Profile/UserAddressPage/UserAddressPage'
import UserPurchasePage from '../pages/Profile/UserPurchase/UserPurchasePage'
import ChangePassword from '../pages/Profile/ChangePassword/ChangePassword'
import SigninPage from '../pages/SigninPage/SigninPage'
import VerifyEmailPage from '../pages/VerifyEmailPage/VerifyEmailPage'
import CreateCategory from '../pages/ShopCRUD/CreateCategory/CreateCategory'
import CreateProduct from '../pages/ShopCRUD/CreateProduct/CreateProduct'

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
        path: '/user/purchase',
        page: UserPurchasePage,
        isShowHeader: true
    },
    {
        path: '/user/changePassword',
        page: ChangePassword,
        isShowHeader: true
    },
    {
        path: '/user/signin',
        page: SigninPage,
        isShowHeader: false 
    },
    {
        path: '/user/verifyemail',
        page: VerifyEmailPage,
        isShowHeader: false 
    },
    {
        path: '/createcategory',
        page: CreateCategory,
        isShowHeader: false 
    },
    {
        path: '/createproduct',
        page: CreateProduct,
        isShowHeader: false 
    },
    {
        path: '*',
        page: NotFoundPage
    },
]