export function filterSet(scholarships, filters) {
  scholarships.forEach((scholarship) => {
    try {
      if (filters) {
        scholarship.show = name(scholarship, filters);
      } else {
        scholarship.show = true;
      }
    } catch (err) {
      console.error("filters error caught: ", scholarship.name, err);
      scholarship.show = false;
    }

    return scholarships;
  });

  return scholarships;
}

function name(scholarship, filters) {
  const visible = filters.name
    ? scholarship.ScholarshipName.toLowerCase().includes(filters.name)
    : true;
  return visible ? date(scholarship, filters) : false;
}

function date(scholarship, filters) {
  const visible = filters.date
    ? new Date(scholarship.ExpirationDate) >= new Date(filters.date)
    : true;

  return visible ? gPA(scholarship, filters) : false;
}

function gPA(scholarship, filters) {
  let visible = true;

  if (filters.minGPA) {
    visible =
      scholarship.minGPA <= filters.minGPA &&
      filters.minGPA <= scholarship.maxGPA;
  }

  if (filters.maxGPA) {
    visible =
      scholarship.minGPA <= filters.maxGPA &&
      filters.maxGPA <= scholarship.maxGPA;
  }

  return visible ? backer(scholarship, filters) : false;
}

function backer(scholarship, filters) {
  const visible = filters.backer
    ? scholarship.Provider.toLowerCase().includes(filters.backer)
    : true;

  return visible ? amount(scholarship, filters) : false;
}

function amount(scholarship, filters) {
  const visible = filters.amount ? scholarship.Amount >= filters.amount : true;

  return visible ? interests(scholarship, filters) : false;
}

function interests(scholarship, filters) {
  const visible = filters.interests
    ? scholarship.Interests.toLowerCase().includes(filters.interests)
    : true;

  return visible ? ethnicity(scholarship, filters) : false;
}

function ethnicity(scholarship, filters) {
  const visible = filters.ethnicity
    ? scholarship.Ethnicity.toLowerCase().includes(filters.ethnicity)
    : true;

  return visible ? citizenship(scholarship, filters) : false;
}

function citizenship(scholarship, filters) {
  const visible = filters.citizenship
    ? scholarship.CitizenshipStatus.toLowerCase().includes(filters.citizenship)
    : true;

  return visible ? state(scholarship, filters) : false;
}

function state(scholarship, filters) {
  const visible = filters.state
    ? scholarship.StateOfResidency.toLowerCase().includes(filters.state)
    : true;

  return visible ? education(scholarship, filters) : false;
}

function education(scholarship, filters) {
  const visible = filters.education
    ? scholarship.CollegeLevel.toLowerCase().includes(filters.education)
    : true;

  return visible;
}
