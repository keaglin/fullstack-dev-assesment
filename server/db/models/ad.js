const mongoose = require('mongoose')

const TargetSchema = new mongoose.Schema({
  languages: Array,
  genders: Array,
  locations: Array,
  interests: Array,
  KeyWords: Array
})

const CreativeSchema = new mongoose.Schema({
  header: String,
  description: String,
  url: String,
  image: String
})

const InsightSchema = new mongoose.Schema({
  impressions: Number,
  clicks: Number,
  nanos_score: Number,
  cost_per_click: Number,
  click_through_rate: Number,
  advanced_kpi_1: Number,
  advanced_kpi_2: Number
})

const SocialSchema = new mongoose.Schema({
  status: String,
  total_budget: Number,
  remaining_budget: Number,
  start_date: { type: Date, default: Date.now },
  end_date: { type: Date, default: Date.now },
  target_audience: TargetSchema,
  creatives: CreativeSchema,
  insights: InsightSchema
})

const PlatformSchema = new mongoose.Schema({
  facebook: SocialSchema,
  instagram: SocialSchema,
  google: SocialSchema
})

const AdSchema = new mongoose.Schema({
  id: Number,
  name: String,
  goal: String,
  total_budget: Number,
  status: String,
  platforms: PlatformSchema
})

mongoose.model('Ad', AdSchema)

module.exports = mongoose