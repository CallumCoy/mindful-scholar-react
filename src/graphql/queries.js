/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      ScholarshipName
      ExpirationDate
      Amount
      ApplicationLink
      CitizenshipStatus
      CollegeLevel
      Description
      Ethnicity
      Interests
      maxGPA
      minGPA
      Provider
      StateOfResidency
      TypeOfProgram
      id
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        ScholarshipName
        ExpirationDate
        Amount
        ApplicationLink
        CitizenshipStatus
        CollegeLevel
        Description
        Ethnicity
        Interests
        maxGPA
        minGPA
        Provider
        StateOfResidency
        TypeOfProgram
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
