
export const getUserProfile = ()=>{
    const username = localStorage.getItem('username')
    const company = localStorage.getItem('company')
    const userprofile = {username, company}
    if (userprofile !== null || userprofile !== 'undefined' || userprofile !== undefined ){
        return userprofile
    }else{
        return null
    }
}