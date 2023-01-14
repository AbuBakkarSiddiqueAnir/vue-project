export const fields = [
  {
    name: 'Class of Service',
    type: 'dropdown',
    options: [
      {
        id: '1',
        name: 'Gold'
      },
      {
        id: '2',
        name: 'Silver'
      }
    ]
  },
  {
    name: 'Service Prefix',
    type: 'dropdown',
    options: [
      {
        id: '1',
        name: 'Yes'
      },
      {
        id: '2',
        name: 'No'
      }
    ]
  },
  {
    name: 'Prefix',
    type: 'input'
  },
  {
    name: 'Customer SBC Name',
    type: 'input'
  },
  {
    name: 'Customer SBC version',
    type: 'input'
  },
  {
    name: 'Customer SBC Location',
    type: 'input',
    options: [
      {
        id: '1',
        name: 'Netherland'
      },
      {
        id: '2',
        name: 'Bangladesh'
      },
      {
        id: '2',
        name: 'USA'
      }
    ]
  },
  {
    name: 'Dial Pattern',
    type: 'dropdown',
    options: [
      {
        id: '1',
        name: 'E165'
      },
      {
        id: '2',
        name: 'R123'
      }
    ]
  },
  {
    name: 'Codec',
    type: 'dropdown',
    options: [
      {
        id: '1',
        name: 'G2132'
      },
      {
        id: '2',
        name: 'R2123'
      }
    ]
  },
  {
    name: 'DTMF Mode',
    type: 'input'
  },
  {
    name: 'SBC Location',
    type: 'dropdown',
    options: [
      {
        id: '1',
        name: 'Netherland'
      },
      {
        id: '2',
        name: 'Bangladesh'
      },
      {
        id: '2',
        name: 'USA'
      }
    ]
  },
  {
    name: 'Signaling Ips ',
    type: 'add-input',
    options: ['12.343.234.234', '232.343.234.234']
  },
  {
    name: 'Media Ips ',
    type: 'add-input',
    options: ['12.343.234.234', '232.343.234.234']
  }

]
