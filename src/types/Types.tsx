export type Person = {
  score: number;
  id: string;
  schema: string;
  name: string;
  aliases: string;
  birth_date: string;
  countries: string;
  identifiers: string;
  sanctions: string;
  phones: string;
  emails: string;
  dataset: string;
  last_seen: string;
  first_seen: string;
}[];

export type PersonObject = {
  score: number;
  id: string;
  schema: string;
  name: string;
  aliases: string;
  birth_date: string;
  countries: string;
  identifiers: string;
  sanctions: string;
  phones: string;
  emails: string;
  dataset: string;
  last_seen: string;
  first_seen: string;
};
export type PersonsFromCompany = {
  name: string;
  companyName: string;
  countries: string;
}[];
export type PersonsFromCompanyObject = {
  name: string;
  companyName: string;
  countries: string;
};
