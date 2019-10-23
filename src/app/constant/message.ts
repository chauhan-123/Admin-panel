import { VALIDATION_CRITERIA } from "./validation-criteria";

  
export const VALIDATION_MESSAGES = {
    email : {
        required:"Please enter email address",
        pattern:'Please enter a valid email address',
        maxlength:"Email can't be more than "+VALIDATION_CRITERIA.emailMaxLength+" characters long"
    },
    password : {
        required:"Please enter a password",
        pattern:"Password can't contain blank spaces",
        minlength:`Password must be between ${VALIDATION_CRITERIA.passwordMinLength}-${VALIDATION_CRITERIA.passwordMaxLength} characters`,
        maxlength:`Password must be between ${VALIDATION_CRITERIA.passwordMinLength}-${VALIDATION_CRITERIA.passwordMaxLength} characters`
    },
    name : {
        required:"Please enter name",
        pattern: "Please enter a valid name",
        minlength:`Name must be between ${VALIDATION_CRITERIA.nameMinLength}-${VALIDATION_CRITERIA.nameMaxLength} characters`,
        maxlength:`Name must be between ${VALIDATION_CRITERIA.nameMinLength}-${VALIDATION_CRITERIA.nameMaxLength} characters`,
    },
    // title : {
    //     required:"Please enter title",
    //     pattern: "Please enter a valid title",
    //     minlength:`Title must be between ${VALIDATION_CRITERIA.titleMinLength}-${VALIDATION_CRITERIA.titleMaxLength} characters`,
    //     maxlength:`Title must be between ${VALIDATION_CRITERIA.titleMinLength}-${VALIDATION_CRITERIA.titleMaxLength} characters`,
    // },
    // subTitle : {
    //     required:"Please enter sub title",
    //     pattern: "Please enter a valid sub title",
    //     minlength:`Sub title must be between ${VALIDATION_CRITERIA.subTitleMinLength}-${VALIDATION_CRITERIA.subTitleMaxLength} characters`,
    //     maxlength:`Sub title must be between ${VALIDATION_CRITERIA.subTitleMinLength}-${VALIDATION_CRITERIA.subTitleMaxLength} characters`,
    // },
    // caption : {
    //     required:"Please enter caption",
    //     pattern:"Please enter a valid caption",
    //     minlength:`Caption must be between ${VALIDATION_CRITERIA.locationMinLength}-${VALIDATION_CRITERIA.locationMaxLength} characters`,
    //     maxlength:`Caption must be between ${VALIDATION_CRITERIA.locationMinLength}-${VALIDATION_CRITERIA.locationMaxLength} characters`
    // },
    // category : {
    //     required:"Please select a category"
    // },
    // usersTagged : {
    //     required:"Please select a user"
    // },
    userName : {
        required:"Please enter user name",
        pattern:"Please enter a valid user name",
        minlength:`User name must be between ${VALIDATION_CRITERIA.nameMinLength}-${VALIDATION_CRITERIA.nameMaxLength} characters`,
        maxlength:`User name must be between ${VALIDATION_CRITERIA.nameMinLength}-${VALIDATION_CRITERIA.nameMaxLength} characters`
    },
    mobileNumber : {
        required:"Please enter mobile number",
        pattern:"Mobile number can only contain digits",
        minlength:`Name must be between ${VALIDATION_CRITERIA.phoneMinLength}-${VALIDATION_CRITERIA.phoneMaxLength} characters`,
        maxlength:`Name must be between ${VALIDATION_CRITERIA.phoneMinLength}-${VALIDATION_CRITERIA.phoneMaxLength} characters`
    },
    // location : {
    //     required:"Please enter location",
    //     pattern:"Please enter a valid location",
    //     maxlength:"Location can't be more than "+VALIDATION_CRITERIA.locationMaxLength+" characters long",
    // },
    // country : {
    //     required:"Please select a country"
    // },
    // state : {
    //     required:"Please select a state"
    // },
    // city : {
    //     required:"Please select a city"
    // },
    confirmPassword : {
        required:"Please enter a confirm password",
        pattern:"Confirm password can't contain blank spaces",
        minlength:`Confirm password must be between ${VALIDATION_CRITERIA.passwordMinLength}-${VALIDATION_CRITERIA.passwordMaxLength} characters`,
        maxlength:`Confirm password must be between ${VALIDATION_CRITERIA.passwordMinLength}-${VALIDATION_CRITERIA.passwordMaxLength} characters`,
        matchPassword:"Confirm password is not matched with password"
    },
    
}
export const POPUP_MESSAGES = {
    ok: 'Ok',
    close:'Close',
    confrim:'Confirmation',
    signUpSuccess: 'User registered successfully',
    signUpVerificationLink: 'User registered successfully , a link has been sent to email id . Please follow the email to verify account .',
    passwordResetTitle:'Reset Password',
    passwordResetLink: 'Password reset link has been sent to registered email id . Please follow the link to reset password .',
    verifyTokenTitle:' Token verify',
    verifyChanged:'  token has verified from user',
    profileEdited: 'Profile has been Edited successfully.',
    passwordChanged: 'Password has been changed successfully.',
    passwordChangedTitle:'Change Password',
    invalidResetPasswordLink: 'Reset password link is expired',
    bookTitle:'Book store',
    bookSave:'books are saved',
    logout: 'Logout',
    logoutConfirmation: 'Do you wish to logout?',
    saveAsDraft: 'Talk has been saved as draft successfully',
    talkAdded: 'Talk has been added successfully',
    classAdded: 'Class has been added successfully',
    draftPublished: 'Draft has been published successfully',
    titleImageRequired:'Please select a title image',
    selectAddress:'Please fill a valid address',
    notificationAdded: 'Notification added successfully'
  };
export const COMMON_MESSAGES = {
    ADDED: (type)=> toTitleCase(type) + " added successfully",
    UPDATED: (type)=> toTitleCase(type) + " updated successfully",
    BLOCKED: {
        confirm:(type)=>`Do you want to block this ${type.toLowerCase()}?`,
        success:(type)=>`${toTitleCase(type)} has been blocked successfully`
    },
    ACTIVE: {
        confirm:(type)=>`Do you want to unblock this ${type.toLowerCase()}?`,
        success:(type)=>`${toTitleCase(type)} has been unblocked successfully`
    },
    DELETED: {
        confirm:(type)=>`Do you want to delete this ${type.toLowerCase()}?`,
        success:(type)=>`${toTitleCase(type)} has been deleted successfully`
    }
};
export const SOMETHING_WENT_WRONG = 'Something went wrong , Please try again later.';  

export const invalidImageError = (format = 'jpeg/png') => `Only ${format} images are allowed`;

export const invalidFileSize = (size = 4) => `File size can not be more than ${size} MB`;

export const toTitleCase = (str) => {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}