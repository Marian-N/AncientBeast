import { isTeam, Team } from './team';
import { Creature } from '../creature';

jest.mock('../creature', () => {
	return {
		Creature: jest.fn().mockImplementation(() => {
			return {};
		}),
	};
});

describe('team utility', () => {
	describe('isTeam', () => {
		const creature1 = new Creature();
		const creature2 = new Creature();
		describe('when team is Team.Same', () => {
			it('should return true if the teams are the same', () => {
				creature1.team = 1;
				creature2.team = 1;
				expect(isTeam(creature1, creature2, Team.Same)).toBe(true);
			});
			it('should return false if the teams are not the same', () => {
				creature1.team = 1;
				creature2.team = 2;
				expect(isTeam(creature1, creature2, Team.Same)).toBe(false);
			});
		});
		describe('when team is Team.Ally', () => {
			it('should return true if the teams are the same', () => {
				creature1.team = 1;
				creature2.team = 1;
				expect(isTeam(creature1, creature2, Team.Ally)).toBe(true);
			});
			it('should return false if the teams are not the same', () => {
				creature1.team = 1;
				creature2.team = 2;
				expect(isTeam(creature1, creature2, Team.Ally)).toBe(false);
			});
		});
		describe('when team is Team.Enemy', () => {
			it('should return false if the teams are the same', () => {
				creature1.team = 1;
				creature2.team = 2;
				expect(isTeam(creature1, creature2, Team.Enemy)).toBe(true);
			});
			it('should return true if the teams are not the same', () => {
				creature1.team = 1;
				creature2.team = 1;
				expect(isTeam(creature1, creature2, Team.Enemy)).toBe(false);
			});
		});
		describe('when team is Team.Both', () => {
			it('should always return true', () => {
				creature1.team = 1;
				creature2.team = 1;
				expect(isTeam(creature1, creature2, Team.Both)).toBe(true);
				creature1.team = 1;
				creature2.team = 2;
				expect(isTeam(creature1, creature2, Team.Both)).toBe(true);
			});
		});
	});
});
