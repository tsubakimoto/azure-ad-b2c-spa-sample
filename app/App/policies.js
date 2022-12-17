/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1A_SUSIPOLICYNAME",
        editProfile: "B2C_1A_PROFILEEDITPOLICYNAME"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://your-tenant.b2clogin.com/your-tenant.onmicrosoft.com/B2C_1A_LINELOGINSIGNUPORSIGNIN",
        },
        editProfile: {
            authority: "https://your-tenant.b2clogin.com/your-tenant.onmicrosoft.com/B2C_1A_LINELOGINPROFILEEDIT"
        }
    },
    authorityDomain: "your-tenant.b2clogin.com"
}