/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Scholarship } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ScholarshipUpdateFormInputValues = {
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
export declare type ScholarshipUpdateFormValidationValues = {
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
export declare type ScholarshipUpdateFormOverridesProps = {
    ScholarshipUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type ScholarshipUpdateFormProps = React.PropsWithChildren<{
    overrides?: ScholarshipUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    scholarship?: Scholarship;
    onSubmit?: (fields: ScholarshipUpdateFormInputValues) => ScholarshipUpdateFormInputValues;
    onSuccess?: (fields: ScholarshipUpdateFormInputValues) => void;
    onError?: (fields: ScholarshipUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ScholarshipUpdateFormInputValues) => ScholarshipUpdateFormInputValues;
    onValidate?: ScholarshipUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ScholarshipUpdateForm(props: ScholarshipUpdateFormProps): React.ReactElement;
