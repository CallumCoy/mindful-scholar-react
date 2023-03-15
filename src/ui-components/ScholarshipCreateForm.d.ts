/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ScholarshipCreateFormInputValues = {
    ScholarshipName?: string;
    ExpirationDate?: string;
    OpeningDate?: string;
    Amount?: number;
    ApplicationLink?: string;
    CitizenshipStatus?: string;
    CollegeLevel?: string;
    Description?: string;
    Ethnicity?: string;
    Interests?: string;
    maxGPA?: number;
    minGPA?: number;
    Provider?: string;
    StateOfResidency?: string;
    TypeOfProgram?: string;
};
export declare type ScholarshipCreateFormValidationValues = {
    ScholarshipName?: ValidationFunction<string>;
    ExpirationDate?: ValidationFunction<string>;
    OpeningDate?: ValidationFunction<string>;
    Amount?: ValidationFunction<number>;
    ApplicationLink?: ValidationFunction<string>;
    CitizenshipStatus?: ValidationFunction<string>;
    CollegeLevel?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
    Ethnicity?: ValidationFunction<string>;
    Interests?: ValidationFunction<string>;
    maxGPA?: ValidationFunction<number>;
    minGPA?: ValidationFunction<number>;
    Provider?: ValidationFunction<string>;
    StateOfResidency?: ValidationFunction<string>;
    TypeOfProgram?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ScholarshipCreateFormOverridesProps = {
    ScholarshipCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ScholarshipName?: PrimitiveOverrideProps<TextFieldProps>;
    ExpirationDate?: PrimitiveOverrideProps<TextFieldProps>;
    OpeningDate?: PrimitiveOverrideProps<TextFieldProps>;
    Amount?: PrimitiveOverrideProps<TextFieldProps>;
    ApplicationLink?: PrimitiveOverrideProps<TextFieldProps>;
    CitizenshipStatus?: PrimitiveOverrideProps<TextFieldProps>;
    CollegeLevel?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
    Ethnicity?: PrimitiveOverrideProps<TextFieldProps>;
    Interests?: PrimitiveOverrideProps<TextFieldProps>;
    maxGPA?: PrimitiveOverrideProps<TextFieldProps>;
    minGPA?: PrimitiveOverrideProps<TextFieldProps>;
    Provider?: PrimitiveOverrideProps<TextFieldProps>;
    StateOfResidency?: PrimitiveOverrideProps<TextFieldProps>;
    TypeOfProgram?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ScholarshipCreateFormProps = React.PropsWithChildren<{
    overrides?: ScholarshipCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ScholarshipCreateFormInputValues) => ScholarshipCreateFormInputValues;
    onSuccess?: (fields: ScholarshipCreateFormInputValues) => void;
    onError?: (fields: ScholarshipCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ScholarshipCreateFormInputValues) => ScholarshipCreateFormInputValues;
    onValidate?: ScholarshipCreateFormValidationValues;
} & React.CSSProperties>;
export default function ScholarshipCreateForm(props: ScholarshipCreateFormProps): React.ReactElement;
