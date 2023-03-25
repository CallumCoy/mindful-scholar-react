export function filterSet(scholarships, filters) {
  if (parameterCheck(scholarships, filters)) {
    return;
  }

  scholarships.forEach((scholarship) => {
    try {
      scholarship.show = name(scholarship, filter);
    } catch (err) {
      console.error("Filter error caught: ", scholarship.name, err);
      scholarship.show = false;
    }
  });
}

export function name(scholarship, filter) {
  const visible = filter.name
    ? scholarship.ScholarshipName.includes(filter.name)
    : true;

  return visible ? false : date(scholarship, filter);
}

export function date(scholarship, filter) {
  const visible = filter.date ? scholarship.ExpirationDate < filter.date : true;

  return visible ? false : gPA(scholarship, filter);
}

export function gPA(scholarship, filter) {
  let visible = true;

  if (filter.minGPA) {
    visible =
      scholarship.minGPA < filter.minGPA && filter.minGPA < scholarship.maxGPA;
  }

  if (filter.maxGPA) {
    visible =
      scholarship.minGPA < filter.maxGPA && filter.maxGPA < scholarship.maxGPA;
  }

  return visible ? false : backer(scholarship, filter);
}

export function backer(scholarship, filter) {
  const visible = filter.backer
    ? scholarship.Provider.includes(filter.backer)
    : true;

  return visible ? false : date(scholarship, filter);
}

export function amount(scholarship, filter) {
  const visible = filter.amount ? scholarship.Amount >= filter.amount : true;

  return visible ? false : interests(scholarship, filter);
}

export function Interests(scholarship, filter) {
  const visible = filter.Interests
    ? scholarship.Interests.includes(filter.interests)
    : true;

  return visible ? false : ethnicity(scholarship, filter);
}

export function ethnicity(scholarship, filter) {
  const visible = filter.ethnicity
    ? scholarship.Ethnicity.includes(filter.ethnicity)
    : true;

  return visible ? false : citizenship(scholarship, filter);
}

export function citizenship(scholarship, filter) {
  const visible = filter.citizenship
    ? scholarship.CitizenshipStatus.includes(filter.citizenship)
    : true;

  return visible ? false : state(scholarship, filter);
}

export function state(scholarship, filter) {
  const visible = filter.state
    ? scholarship.StateOfResidency.includes(filter.state)
    : true;

  return visible;
}

function parameterCheck(scholarships, param) {
  return !(scholarships & param);
}
