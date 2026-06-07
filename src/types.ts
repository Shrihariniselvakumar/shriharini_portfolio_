/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  github: string;
  isSpotlight?: boolean;
}

export interface SkillCategory {
  name: string;
  iconName: string;
  skills: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Award {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Certification {
  id: string;
  title: string;
  provider: string;
}
