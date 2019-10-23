import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { PATTERN } from '../../../constant/pattern';
import { VALIDATION_CRITERIA } from '../../../constant/validation-criteria';
import { BehaviorSubject } from 'rxjs';
import { VALIDATION_MESSAGES } from '../../../constant/message';
import { MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar, MatDialog } from '@angular/material';
import { ConfirmationModelComponent } from '../component/confirmation-model/confirmation-model.component';
import {SOMETHING_WENT_WRONG , POPUP_MESSAGES} from '../../../constant/message'
@Injectable({
    providedIn: 'root'
})
export class UtilityService {
    public horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    public verticalPosition: MatSnackBarVerticalPosition = 'top';
    public setAutoHide = true;
    public autoHide = 2000;
    public addExtraClass = false;

    constructor(private snackBar: MatSnackBar , private _dialog:MatDialog
    ) {
    }

    public static loader = new BehaviorSubject<boolean>(false);

    public snackBarConfig(successflag) {
        let config = new MatSnackBarConfig();
        config.verticalPosition = this.verticalPosition;
        config.horizontalPosition = this.horizontalPosition;
        config.duration = this.setAutoHide ? this.autoHide : 0;
        if (!successflag) {
            config.panelClass = ['red-snackbar']
        }
        else {
            config.panelClass = this.addExtraClass ? ['party'] : undefined;
        }
        return config;
    }

    openSnackBar(message: string, successflag: boolean) {
        this.snackBar.open(message, undefined, this.snackBarConfig(successflag));
    }

    clearStorage() {
        localStorage.removeItem('login');
        localStorage.removeItem('_id');
        localStorage.removeItem('admin-name');
        localStorage.removeItem('admin-email');
    }

    openDialog(data) {
        const dialogRef = this._dialog.open(ConfirmationModelComponent, {
            width:'500px',
            data: data
        });
        return dialogRef.afterClosed();
    }

    errorAlert(error) {
        let data = {
            title: '',
            message: (error && error.error && error.error.message) ? (error.error.message) : SOMETHING_WENT_WRONG,
            yes: POPUP_MESSAGES.close,
            isHideCancel: true
        }
        this.openDialog(data).subscribe(success => {

        });
    }

     showAlert(message, type?) {
        this.snackBar.open(message, 'Close', {
            duration: 3000,
        });
    }

    trim(data) {
        for (const item in data) {
            if (typeof data[item] === 'string') {
                data[item] = data[item].trim();
            }
        }
        return data;
    }

    getEmailFormControl() {
        return ['', Validators.compose([
            Validators.required,
            Validators.pattern(PATTERN.email),
            Validators.maxLength(VALIDATION_CRITERIA.emailMaxLength)]
        )];
    }

    getVerifyControl() {
    return ['' , Validators.compose([
        Validators.required
    ])]
  
    }

    getPasswordFormControl() {
        return ['', Validators.compose([
            Validators.required,
            Validators.pattern(PATTERN.password),
            Validators.minLength(VALIDATION_CRITERIA.passwordMinLength),
            Validators.maxLength(VALIDATION_CRITERIA.passwordMaxLength)]
        )];
    }

    getRememberControl(){
        return['' , Validators.compose([
            Validators.required
        ])]
    }

    getNameFormControl(required = true, maxLength = 'nameMaxLength') {
        let compose = [
            Validators.pattern(PATTERN.name),
            Validators.minLength(VALIDATION_CRITERIA.nameMinLength),
            Validators.maxLength(VALIDATION_CRITERIA[maxLength]),
        ];
        if (required) {
            compose.splice(0, 0, Validators.required);
        }
        return ['', Validators.compose(
            compose
        )];
    }

    getLocationFormControl(required = true) {
        let compose = [
            Validators.pattern(PATTERN.name),
            Validators.minLength(VALIDATION_CRITERIA.locationMinLength),
            Validators.maxLength(VALIDATION_CRITERIA.locationMaxLength)
        ];
        if (required) {
            compose.splice(0, 0, Validators.required);
        }
        return ['', Validators.compose(
            compose
        )];
    }

    getPhoneFormControl(required = true, maxLength = 'phoneMaxLength') {
        let compose = [
            Validators.pattern(PATTERN.phone),
            Validators.minLength(VALIDATION_CRITERIA.phoneMinLength),
            Validators.maxLength(VALIDATION_CRITERIA[maxLength])
        ];
        if (required) {
            compose.splice(0, 0, Validators.required);
        }
        return ['', Validators.compose(
            compose
        )];
    }

    getPriceFormControl(required = true){
        let compose = [
            Validators.pattern(PATTERN.phone),
        ];
        if (required) {
            compose.splice(0, 0, Validators.required);
        }
        return ['', Validators.compose(
            compose
        )];
    }

    getBookCodeControl(required = true){
        let compose = [
            Validators.pattern(PATTERN.phone),
        ];
        if (required) {
            compose.splice(0, 0, Validators.required);
        }
        return ['', Validators.compose(
            compose
        )];
    }

    getDescriptionFormControl(){
        return['' , Validators.compose([
            Validators.required
        ])]
    }

    getImageControl(){
        return['' , Validators.compose([
            Validators.required
        ])]
    }
}
