import { Bhatara, Wuku } from '../../types'

const wukuWithBhataraMap = new Map<Wuku, Bhatara>([
  ['Sinta', 'Bhatara Yamadipati'],
  ['Landep', 'Bhatara Mahadewa'],
  ['Ukir', 'Bhatara Mahayekti'],
  ['Kulantir', 'Bhatara Langsur'],
  ['Tolu', 'Bhatara Bayu'],
  ['Gumbreg', 'Bhatara Candra'],
  ['Wariga', 'Bhatara Asmara'],
  ['Warigadean', 'Bhatara Maharesi'],
  ['Julungwangi', 'Bhatara Sambu'],
  ['Sungsang', 'Bhatara Gana'],
  ['Dungulan', 'Bhatara Kamajaya'],
  ['Kuningan', 'Bhatara Indra'],
  ['Langkir', 'Bhatara Kala'],
  ['Medangsia', 'Bhatara Brahma'],
  ['Pujut', 'Bhatara Guritna'],
  ['Pahang', 'Bhatara Tantra'],
  ['Krulut', 'Bhatara Wisnu'],
  ['Merakih', 'Bhatara Surenggana'],
  ['Tambir', 'Bhatara Siwa'],
  ['Medangkungan', 'Bhatara Basuki'],
  ['Matal', 'Bhatara Sakri'],
  ['Uye', 'Bhatara Kuwera'],
  ['Menail', 'Bhatara Citrayoga'],
  ['Prangbakat', 'Bhatara Bisma'],
  ['Bala', 'Bhatara Durga'],
  ['Ugu', 'Bhatara Singajalma'],
  ['Wayang', 'Bhatara Sri'],
  ['Kelawu', 'Bhatara Sedana'],
  ['Dukut', 'Bhatara Baruna'],
  ['Watugunung', 'Bhatara Anantaboga'],
])

const getBhatara = (key: Wuku): Bhatara | undefined =>
  wukuWithBhataraMap.get(key)

export default getBhatara
