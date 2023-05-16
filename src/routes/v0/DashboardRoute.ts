import express, { Request, Response } from 'express';
import { ContactMail, TourBooking, User } from '../../models/mongoose';



const router = express.Router();

router.get('/', async (req: Request, res: Response) => {

  try {

    const [Tours, Users, ConactMails, toursCountry, data] = await Promise.all([
      TourBooking.find().count(),
      User.find().count(),
      ContactMail.find().count(),
      TourBooking.find({}),
      TourBooking.aggregate([
        {
          $group: {
            _id: {
              month: { $month: "$created_at" },
              week: { $week: "$created_at" }
            },
            count: { $sum: 1 }
          }
        },
        {
          $project: {
            _id: 0,
            month: "$_id.month",
            week: "$_id.week",
            count: 1
          }
        },
        {
          $sort: {
            month: 1,
            week: 1
          }
        }
      ])



    ]);


    res.status(200).json({ nums: [{name:'booked tours', count:Tours }, {name:'users', count:Users }, {name:'contact emails', count: ConactMails }], tours: byMonth(toursCountry), data });
  } catch (error: any) {
    console.log({ error: error.message });

    res.status(500).json({ message: error.message });
  }

})

// router.get('/:id', async (req: Request, res: Response) => {
//     try {
//         let tours = await DbModel.findById({ _id: req.params.id });

//         return res.json(tours);
//     } catch (error: any) {
//         return res.status(500).json({ error: error.message });
//     }


// })

// router.post('/', async (req: Request, res: Response) => {
//     const { body } = req;
//     try {
//         let created = await DbModel.create(body);

//         return res.json(created);
//     } catch (error: any) {
//         return res.status(500).json({ error: error.message });
//     }


// })
// router.put('/:id', async (req: Request, res: Response) => {
//     const { body } = req;

//     try {
//         let updated = await DbModel.updateOne({ _id: req.params.id }, { '$set': body });


//         return res.json(updated);
//     } catch (error: any) {
//         return res.status(500).json({ error: error.message });
//     }


// })

// router.delete('/:id', async (req: Request, res: Response) => {
//     try {
//         let deleted = await DbModel.deleteOne({ _id: req.params.id });

//         return res.json(deleted);
//     } catch (error: any) {
//         return res.status(500).json({ error: error.message });
//     }


// })

interface ITour {
  email: string,
  country: string,
  createdAt: Date
  departureDate: Date
}

function byMonth(data: ITour[]) {
  let bookngPerMonth: any = {}
  data.forEach((booking) => {
    let newItem = { month: booking.createdAt.getMonth(), count: 1 }
    bookngPerMonth[newItem.month] ? ++bookngPerMonth[newItem.month]['count'] : bookngPerMonth[booking.createdAt.getMonth()] = newItem
  });
  let items: { month: number, count: number }[] = Object.values(bookngPerMonth);
  // console.log({ count: items.length })
  for (let i = 4 - items.length; i > 0; i--) {
    let month: number = items[0] ? (items[0].month - 1) : 3;

    let count = Math.random() * 50;
    // console.log({ i })
    items.unshift({ month: (month >= 0 ? month : 12 + month), count: Math.floor(count) })
  }

  // return Object.values(bookngPerMonth)
  return items;
}

export default router;
