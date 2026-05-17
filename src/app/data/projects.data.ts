export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  categoryLabel: string;
  location: string;
  description: string;
  image: string;
  award?: string;
  galleryImages: string[];
}

export const PROJECTS: Project[] = [
  { slug: 'academy-sports-outdoors', title: 'Academy Sports + Outdoors', category: 'retail' },
  { slug: 'alamo-distribution', title: 'Alamo Distribution', category: 'office' },
  { slug: 'alamo-ranch-south-phase-1', title: 'Alamo Ranch South Phase 1', category: 'mixed-use' },
  { slug: 'billiard-factory', title: 'Billiard Factory', category: 'retail' },
  { slug: 'blackbrush-oil-and-gas', title: 'Blackbrush Oil and Gas', category: 'office' },
  { slug: 'bpc-forum-pointe', title: 'BPC Forum Pointe', category: 'mixed-use' },
  { slug: 'bulverde-crossing', title: 'Bulverde Crossing', category: 'retail' },
  { slug: 'bulverde-crossing-phase-ii', title: 'Bulverde Crossing Phase II', category: 'retail' },
  { slug: 'ceg-office-building', title: 'CEG Office Building', category: 'office' },
  { slug: 'city-view-village', title: 'City View Village', category: 'mixed-use' },
  { slug: 'comfort-surgery-center-of-san-antonio', title: 'Comfort Surgery Center of San Antonio', category: 'healthcare' },
  { slug: 'county-line-retail-development', title: 'County Line Retail Development', category: 'retail' },
  { slug: 'crest-at-inwood', title: 'Crest at Inwood', category: 'mixed-use' },
  { slug: 'cross-mountain-church', title: 'Cross Mountain Church', category: 'mixed-use' },
  { slug: 'dellview-marketplace', title: 'Dellview Marketplace', category: 'retail' },
  { slug: 'dennis-jewelry', title: 'Dennis Jewelry', category: 'retail' },
  { slug: 'dermatology-san-antonio', title: 'Dermatology San Antonio', category: 'healthcare' },
  { slug: 'dezavala-suites', title: 'DeZavala Suites', category: 'office' },
  { slug: 'eagle-applied-sciences-llc', title: 'Eagle Applied Sciences LLC', category: 'office' },
  { slug: 'eagle-applied-sciences-medpro-technologies', title: 'Eagle Applied Sciences Medpro Technologies', category: 'office' },
  { slug: 'eagle-veterinary-clinic', title: 'Eagle Veterinary Clinic', category: 'healthcare' },
  { slug: 'green-fields-market', title: 'Green Fields Market', category: 'retail' },
  { slug: 'helotes-fire-department', title: 'Helotes Fire Department', category: 'mixed-use' },
  { slug: 'helotes-police-department', title: 'Helotes Police Department', category: 'mixed-use' },
  { slug: 'helotes-shopping-center', title: 'Helotes Shopping Center', category: 'retail' },
  { slug: 'hill-country-interiors', title: 'Hill Country Interiors', category: 'retail' },
  { slug: 'huebner-oaks', title: 'Huebner Oaks', category: 'retail' },
  { slug: 'keller-williams-hq', title: 'Keller Williams HQ', category: 'office' },
  { slug: 'la-arcata-office-garage', title: 'La Arcata Office & Garage', category: 'office' },
  { slug: 'la-arcata-retail-center', title: 'La Arcata Retail Center', category: 'retail' },
  { slug: 'lacks-bandera', title: 'Lacks Bandera', category: 'retail' },
  { slug: 'lacks-vineyard', title: 'Lacks Vineyard', category: 'retail' },
  { slug: 'lake-air-mall', title: 'Lake Air Mall', category: 'retail' },
  { slug: 'oak-haven-massage', title: 'Oak Haven Massage', category: 'healthcare' },
  { slug: 'oasis-salon-suites-and-spa', title: 'Oasis Salon Suites and Spa', category: 'retail' },
  { slug: 'office-interior-finish-out', title: 'Office Interior Finish Out', category: 'office' },
  { slug: 'olmos-creek-shopping-center', title: 'Olmos Creek Shopping Center', category: 'retail' },
  { slug: 'parkview-plaza', title: 'Parkview Plaza', category: 'retail' },
  { slug: 'plaza-las-campanas', title: 'Plaza Las Campanas', category: 'mixed-use' },
  { slug: 'resolute-health-fitness-center', title: 'Resolute Health Fitness Center', category: 'healthcare' },
  { slug: 'resolute-health-mob', title: 'Resolute Health MOB', category: 'healthcare' },
  { slug: 'resolute-health-retail-center', title: 'Resolute Health Retail Center', category: 'retail' },
  { slug: 'rogers-place-retail', title: 'Rogers Place Retail', category: 'retail' },
  { slug: 'rooms-to-go-sa', title: 'Rooms to Go SA', category: 'retail' },
  { slug: 'rooms-to-go-selma', title: 'Rooms To Go Selma', category: 'retail' },
  { slug: 'safeway-supply-warehouse', title: 'Safeway Supply Warehouse', category: 'office' },
  { slug: 'salons-by-kaye', title: 'Salons By Kaye', category: 'retail' },
  { slug: 'san-pedro-towne-center', title: 'San Pedro Towne Center', category: 'retail' },
  { slug: 'shops-at-park-north', title: 'Shops at Park North', category: 'retail' },
  { slug: 'singing-hills', title: 'Singing Hills', category: 'mixed-use' },
  { slug: 'singing-hills-professional-office-building', title: 'Singing Hills Professional Office Building', category: 'office' },
  { slug: 'singing-hills-retail-2', title: 'Singing Hills Retail 2', category: 'retail' },
  { slug: 'singing-hills-retail-3', title: 'Singing Hills Retail 3', category: 'retail' },
  { slug: 'singing-hills-retail-4', title: 'Singing Hills Retail 4', category: 'retail' },
  { slug: 'southerleigh-haute-south', title: 'Southerleigh Haute South', category: 'retail' },
  { slug: 'southern-wealth-management', title: 'Southern Wealth Management', category: 'office' },
  { slug: 'spine-joint-pain-specialists', title: 'Spine & Joint Pain Specialists', category: 'healthcare' },
  { slug: 'starbucks-at-plaza-las-campanas', title: 'Starbucks at Plaza las Campanas', category: 'retail' },
  { slug: 'starbucks-galleria-oaks', title: 'Starbucks Galleria Oaks', category: 'retail' },
  { slug: 'texas-medclinic', title: 'Texas MedClinic', category: 'healthcare' },
  { slug: 'the-marketplace-at-encino-park', title: 'The Marketplace at Encino Park', category: 'retail' },
  { slug: 'tisdall-spine-joint-schertz', title: 'Tisdall Spine & Joint -Schertz', category: 'healthcare' },
  { slug: 'tower-at-boerne', title: 'Tower at Boerne', category: 'office' },
  { slug: 'tradesman-industrial', title: 'Tradesman Industrial', category: 'office' },
  { slug: 'wellmed', title: 'WellMed', category: 'healthcare' },
  { slug: 'westpointe-retail-development', title: 'Westpointe Retail Development', category: 'retail' },
].map((p, index) => {
  // Dynamically assign images and labels based on category
  let categoryLabel = 'Commercial Build';
  let image = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80';
  
  if (p.category === 'healthcare') {
    categoryLabel = 'Healthcare / Medical';
    image = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80';
  } else if (p.category === 'retail') {
    categoryLabel = 'Retail / Dining';
    image = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80';
  } else if (p.category === 'office') {
    categoryLabel = 'Offices & Industrial';
    image = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80';
  } else if (p.category === 'mixed-use') {
    categoryLabel = 'Mixed-Use Masterplan';
    image = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80';
  }

  return {
    ...p,
    id: String(index + 1),
    categoryLabel,
    image,
    location: 'South Texas Region',
    description: `A premier ${categoryLabel.toLowerCase()} project built by Middleman Construction Company. Our team managed pre-construction vetting, on-site supervision, and strict schedule compliance to deliver this high-quality facility.`,
    galleryImages: [
      image,
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
    ]
  };
});
