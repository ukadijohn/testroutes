export interface Route {
  id: number
  routeName: string
  area: string
  duration: string
  difficulty: 'Easy' | 'Medium' | 'Complex'
  hazards: string[]
}

export const ROUTES: Route[] = [
  { id: 1, routeName: 'Route 1 – Cosham High Street Circuit', area: 'Cosham', duration: '14 min', difficulty: 'Medium', hazards: ['Busy pedestrian crossings on High Street', 'Right turn from Havant Road', 'School zone near Lyndhurst Road'] },
  { id: 2, routeName: 'Route 2 – Fratton Park Approach', area: 'Fratton', duration: '16 min', difficulty: 'Complex', hazards: ['Narrow lanes near stadium on match days', 'Fawcett Road complex junction', 'Busy roundabout at Goldsmith Avenue'] },
  { id: 3, routeName: 'Route 3 – Milton Road Triangle', area: 'Milton', duration: '13 min', difficulty: 'Easy', hazards: ['Milton Road long straight with speed awareness', 'Tesco superstore entry/exit', 'Mini-roundabout cluster near Eastern Road'] },
  { id: 4, routeName: 'Route 4 – Old Portsmouth Seafront', area: 'Old Portsmouth', duration: '17 min', difficulty: 'Complex', hazards: ['Narrow Victorian streets near The Hard', 'Tourist pedestrian activity on Hot Walls', 'Tight left turn into Grand Parade'] },
  { id: 5, routeName: 'Route 5 – Southsea Common Loop', area: 'Southsea', duration: '15 min', difficulty: 'Medium', hazards: ['Albert Road busy with cyclists', 'Parking activity on Clarendon Road', 'Right-of-way dispute at Elm Grove'] },
  { id: 6, routeName: 'Route 6 – Hilsea Industrial Approach', area: 'Hilsea', duration: '12 min', difficulty: 'Easy', hazards: ['HGV traffic near industrial estate', 'Hilsea Lines roundabout', 'Lorry turning lanes at Eastern Road junction'] },
  { id: 7, routeName: 'Route 7 – Eastern Road Approach', area: 'Farlington', duration: '18 min', difficulty: 'Complex', hazards: ['70mph dual carriageway section', 'Farlington roundabout lane selection', 'Motorway-standard driving on A27'] },
  { id: 8, routeName: 'Route 8 – Drayton Village Loop', area: 'Drayton', duration: '14 min', difficulty: 'Easy', hazards: ['Village speed calming on Havant Road', 'School crossing on Drayton Lane', 'Hidden junction at Bedhampton Hill'] },
  { id: 9, routeName: 'Route 9 – Portsdown Hill Ascent', area: 'Widley', duration: '16 min', difficulty: 'Medium', hazards: ['Steep hill start and stop', 'Portsdown Hill Road blind bends', 'Fort Widley junction priority'] },
  { id: 10, routeName: 'Route 10 – Commercial Road City Centre', area: 'City Centre', duration: '15 min', difficulty: 'Complex', hazards: ['Pedestrian-heavy city centre', 'Bus lane restrictions', 'Complex signals at Winston Churchill Avenue'] },
  { id: 11, routeName: 'Route 11 – Landport Gyratory', area: 'Landport', duration: '13 min', difficulty: 'Complex', hazards: ['One-way gyratory system', 'Multi-lane right turns', 'Cyclist blind spots on bike lanes'] },
  { id: 12, routeName: 'Route 12 – Copnor Road Circuit', area: 'Copnor', duration: '14 min', difficulty: 'Medium', hazards: ['Long road with multiple pedestrian crossings', 'Copnor Bridge blind summit', 'Right turn onto Twyford Avenue'] },
  { id: 13, routeName: 'Route 13 – Baffins Pond Residential', area: 'Baffins', duration: '12 min', difficulty: 'Easy', hazards: ['Residential 20mph zone', 'School activity near Baffins Infant School', 'Parked cars causing road narrowing'] },
  { id: 14, routeName: 'Route 14 – Northern Parade Loop', area: 'Paulsgrove', duration: '13 min', difficulty: 'Easy', hazards: ['Housing estate crossroads', 'Bus stops causing lane obstruction', 'Sharp left at Allaway Avenue'] },
  { id: 15, routeName: 'Route 15 – Port Solent Marina', area: 'Port Solent', duration: '16 min', difficulty: 'Medium', hazards: ['Roundabout access from M275', 'Marina car park entry timing', 'Dual carriageway merge at Port Way'] },
  { id: 16, routeName: 'Route 16 – Wymering Manor Estate', area: 'Wymering', duration: '12 min', difficulty: 'Easy', hazards: ['Estate roads with parked vehicles', 'Give way signs at unmarked junctions', 'Pedestrian desire lines through estate'] },
  { id: 17, routeName: 'Route 17 – Cosham to Farlington', area: 'Cosham/Farlington', duration: '17 min', difficulty: 'Complex', hazards: ['A27 dual carriageway', 'Speed matching on slip roads', 'Farlington Park roundabout exits'] },
  { id: 18, routeName: 'Route 18 – Fratton to Milton', area: 'Fratton/Milton', duration: '15 min', difficulty: 'Medium', hazards: ['Goldsmith Avenue roundabout', 'Milton Lane narrow section', 'School run timing on Priory Crescent'] },
  { id: 19, routeName: 'Route 19 – Southsea Esplanade', area: 'Southsea', duration: '14 min', difficulty: 'Easy', hazards: ['Tourist parking activity', 'Cyclists on seafront path', 'One-way streets near Canoe Lake'] },
  { id: 20, routeName: 'Route 20 – Gunwharf Quays Approach', area: 'Gunwharf', duration: '16 min', difficulty: 'Complex', hazards: ['Signed-only junction at The Hard', 'Railway crossing timing at Portsmouth Harbour', 'High pedestrian volume at Gunwharf gates'] },
  { id: 21, routeName: 'Route 21 – Highland Road Cemetery', area: 'Eastney', duration: '12 min', difficulty: 'Easy', hazards: ['Narrow residential streets', 'Cemetery access priority road', 'Cyclists on Henderson Road'] },
  { id: 22, routeName: 'Route 22 – Eastney Barracks Loop', area: 'Eastney', duration: '13 min', difficulty: 'Medium', hazards: ['Military access junction', 'Busy seafront crossings', 'Right turn onto Bransbury Road'] },
  { id: 23, routeName: 'Route 23 – Kingston Cross Approach', area: 'Kingston', duration: '14 min', difficulty: 'Medium', hazards: ['Kingston Crescent junction complexity', 'Bus lanes on London Road', 'Pedestrian crossings near shops'] },
  { id: 24, routeName: 'Route 24 – Hilsea to Cosham', area: 'Hilsea/Cosham', duration: '15 min', difficulty: 'Easy', hazards: ['A3 Port Road dual carriageway', 'Cosham roundabout approaches', 'Bus pull-in areas'] },
  { id: 25, routeName: 'Route 25 – Paulsgrove Estates', area: 'Paulsgrove', duration: '12 min', difficulty: 'Easy', hazards: ['Estate 20mph zones', 'Unmarked crossroads', 'Children playing near Marsden Road'] },
  { id: 26, routeName: 'Route 26 – Tipner Lake Industrial', area: 'Tipner', duration: '14 min', difficulty: 'Medium', hazards: ['HGV movements near M275', 'Tipner roundabout from Northern Road', 'Road works area on A3 corridor'] },
  { id: 27, routeName: 'Route 27 – Havant Road Northern Run', area: 'Drayton/Bedhampton', duration: '17 min', difficulty: 'Complex', hazards: ['A2030 speed limit changes', 'Bedhampton railway bridge approach', 'Merging traffic from Brockhampton Lane'] },
  { id: 28, routeName: 'Route 28 – Albert Road Cultural Quarter', area: 'Southsea', duration: '13 min', difficulty: 'Medium', hazards: ['Cafe culture pedestrians', 'Cyclists filtering on Osborne Road', 'Parallel parking manoeuvres required'] },
  { id: 29, routeName: 'Route 29 – Fratton Bridge Approach', area: 'Fratton', duration: '14 min', difficulty: 'Complex', hazards: ['Bridge summit visibility', 'Tram heritage route road markings', 'Goldsmith Avenue right turn queue'] },
  { id: 30, routeName: 'Route 30 – Portsea Island East', area: 'Baffins/Milton', duration: '16 min', difficulty: 'Medium', hazards: ['Eastern Road dual carriageway exits', 'Milton Common grassland junction', 'Baffins Road priority signs'] },
  { id: 31, routeName: 'Route 31 – Gosport Road Approach', area: 'Hardway', duration: '15 min', difficulty: 'Medium', hazards: ['Gosport ferry approach traffic', 'Tidal road near Hardway', 'HGV traffic near Fleetlands'] },
  { id: 32, routeName: 'Route 32 – City to Hilsea Linear', area: 'City Centre/Hilsea', duration: '17 min', difficulty: 'Complex', hazards: ['City centre bus gate cameras', 'Long dual carriageway section', 'Hilsea lido roundabout exits'] },
  { id: 33, routeName: 'Route 33 – Wymering to Cosham', area: 'Wymering/Cosham', duration: '13 min', difficulty: 'Easy', hazards: ['Quiet residential start', 'Give way at Medina Road', 'School zone near Morrisons'] },
  { id: 34, routeName: 'Route 34 – Portsdown Hill Panoramic', area: 'Widley/Purbrook', duration: '18 min', difficulty: 'Complex', hazards: ['Exposed hilltop crosswinds', 'Long descent requires brake management', 'Priority over oncoming on single-track sections'] },
  { id: 35, routeName: 'Route 35 – Fratton to Copnor', area: 'Fratton/Copnor', duration: '13 min', difficulty: 'Medium', hazards: ['Arundel Street one-way section', 'Right filter on Fratton Road', 'Cyclist infrastructure on Copnor Road'] },
  { id: 36, routeName: 'Route 36 – Southsea to Old Portsmouth', area: 'Southsea/Old Portsmouth', duration: '16 min', difficulty: 'Complex', hazards: ['Historic narrow streets', 'Tourist coaches parking illegally', 'Right turn near Cathedral'] },
  { id: 37, routeName: 'Route 37 – Drayton to Cosham', area: 'Drayton/Cosham', duration: '14 min', difficulty: 'Easy', hazards: ['Village speed awareness', 'Busy Cosham shopping junction', 'Pedestrian priority zones'] },
  { id: 38, routeName: 'Route 38 – Northern Corridor Run', area: 'Paulsgrove/Hilsea', duration: '15 min', difficulty: 'Medium', hazards: ['Industrial traffic on Northern Road', 'Allotment site blind access', 'Slip road from M275 junction 2'] },
  { id: 39, routeName: 'Route 39 – Eastney to Fratton', area: 'Eastney/Fratton', duration: '14 min', difficulty: 'Medium', hazards: ['Eastern parade cyclists', 'Tesco store entrance traffic', 'Right turn onto Goldsmith Avenue'] },
  { id: 40, routeName: 'Route 40 – The Grand Circuit', area: 'City-wide', duration: '18 min', difficulty: 'Complex', hazards: ['Multiple roundabout transitions', 'City centre + dual carriageway + residential', 'Requires full Portsmouth road knowledge'] },
]
