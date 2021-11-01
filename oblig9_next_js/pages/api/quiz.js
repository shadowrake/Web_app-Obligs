const quiz  = [
    {
      "question": "Hva er jest",
      "answers": [
        { "answere": "Et biblotek for JS-testing" },
        {
          "answere": "En forkortelse for jester"
        },
        {
          "answere": "Et rammeverk for JS-testing",
          "correct": true
        },
        {
          "answere": "Et rammeverk for java-testing"
        }
      ],
      "helper": {
        "text": "Jest er et rammeverk, det blir brukt for dens mulighet for organisere, validerings teste og mocke, med mer"
      }
    },
      {
      "question": "Hva er et call back",
      "answers": [
        { "answere": "Metode for å håndtere asynkron testing ved settimeout og done",
            "correct": true
        },
        {
          "answere": "Å calle på computeren når den er ferdig med å beiete"
        },
        {
          "answere": "En metode for å håndtere generell testing"
        },
        {
          "answere": "Metode for å håndtere asynkron testing ved async og await"
        }
      ],
      "helper": {
        "text": "Callback er en metode for håndtering av asynkron testing"
      }
    },
      {
      "question": "Hva er MSW",
      "answers": [
        { "answere": "MSW er en metode for å gjøre testing på APIen ved å bruke APIen" },
        {
          "answere": "MSW er et synonym for Microsoft Server worker"
        },
        {
          "answere": "MSW er et rammeverk for react som bruker asynkrone tester"
        },
        {
          "answere": "MSW er en metode for å gjøre testing på APIen ved å bruke en 'falsk'/ mocket API",
          "correct": true
        }
      ],
      "helper": {
        "text": "MSW gjør kall til en API for testing"
      }
    },
      {
      "question": "Hvilken beskrivelse, beskriver React Testing Library",
      "answers": [
        { "answere": "Det er et fleksible og intuitiv bibliotek som tester ved en ved å etterligne Jquery-Apien for enklere DOM manipulering og gjennomgang av react komponenter, bruker også funksjoner som .shallow()" },
        {
          "answere": "Det er et bibliotek dedikert til å teste og trene opp ens reaksjon"
        },
        {
          "answere": "Det er et lightwight bibliotek for å teste react componenter, ved bruk av DOM prinsipper fra react. Kan også bli brukt i tandem med MSW apien ",
          "correct": true
        },
        {
          "answere": "Et bibliotek for å ekslusivt teste asynkrone funksjoner for react"
        }
      ],
      "helper": {
        "text": "Det er et bibliotek for testing av react komponenter"
      }
    }
  ];

  export default function handler(req, res) {
    if (req.method === 'POST') {

      const data = req.body
  
      if (!data?.question) {

        res
          .status(400)
          .json({ success: false, error: 'Fyll ut all nødvendig data' })
      } else {

        quiz.push(data)

        res.status(201).json({ success: true, data: quiz })
      }
    } else if (req.method === 'PUT') {

      res.status(405).end()
    } else {

      res.status(200).json({ success: true, data: quiz })
    }
  }