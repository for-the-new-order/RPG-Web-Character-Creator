import { combineReducers } from 'redux';
import * as changeState from './changeState';

const allReducers = combineReducers({
    additionalDices: changeState.additionalDices,
	archetype: changeState.archetype,
	archetypes: changeState.archetypes,
	archetypeSpecialSkills: changeState.archetypeSpecialSkills,
	archetypeTalents: changeState.archetypeTalents,
	armor: changeState.armor,
	career: changeState.career,
	careers: changeState.careers,
	careerSkillsRank: changeState.careerSkillsRank,
	character: changeState.character,
	characterList: changeState.characterList,
	craftsmanship: changeState.craftsmanship,
	creationCharacteristics: changeState.creationCharacteristics,
	critical: changeState.critical,
	currentHullTrauma: changeState.currentHullTrauma,
	currentSystemStrain: changeState.currentSystemStrain,
	currentStrain: changeState.currentStrain,
	currentWound: changeState.currentWound,
	customArchetypes: changeState.customArchetypes,
	customArchetypeTalents: changeState.customArchetypeTalents,
	customArmor: changeState.customArmor,
	customCareers: changeState.customCareers,
	customGear: changeState.customGear,
	customMotivations: changeState.customMotivations,
	customSkills: changeState.customSkills,
	customSettings: changeState.customSettings,
	customTalents: changeState.customTalents,
	customWeapons: changeState.customWeapons,
	description: changeState.description,
	earnedXP: changeState.earnedXP,
	equipmentArmor: changeState.equipmentArmor,
	equipmentGear: changeState.equipmentGear,
	equipmentWeapons: changeState.equipmentWeapons,
	gear: changeState.gear,
	loadingCustomData: changeState.loadingCustomData,
	loadingData: changeState.loadingData,
	masterMotivations: changeState.masterMotivations,
	masterSkills: changeState.masterSkills,
	masterTalents: changeState.masterTalents,
	misc: changeState.misc,
	money: changeState.money,
	motivations: changeState.motivations,
	printContent: changeState.printContent,
	qualities: changeState.qualities,
	setting: changeState.setting,
	settings: changeState.settings,
	strict: changeState.strict,
	skills: changeState.skills,
	talentModifiers: changeState.talentModifiers,
	talents: changeState.talents,
	theme: changeState.theme,
	themes: changeState.themes,
	user: changeState.user,
	weapons: changeState.weapons,
	vehicle: changeState.vehicle,
	vehicles: changeState.vehicles,
	vehicleList: changeState.vehicleList,
	vehicleType: changeState.vehicleType,
	vehicleWrite: changeState.vehicleWrite,
});

export default allReducers;
