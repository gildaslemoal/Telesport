// TODO: create here a typescript interface for an olympic country
/*
example of an olympic country:
{
    id: 1,
    country: "Italy",
    participations: []
}
*/

export class Olympics {
    constructor(public id: number,
                public country: string,
                public participations:[]) {}
  }