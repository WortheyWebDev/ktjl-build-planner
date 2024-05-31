document.addEventListener('DOMContentLoaded', function() {
    const talents = document.querySelectorAll('.talent-list');
    const sections = document.querySelectorAll('.section');
    
    const contentMap = {
      box1: [
        'Tier 1', 
        'Carnevil', 
        'Special Skill', 
        '<span class="talent-name">CARNEVIL</span> activates at <span class="combo">5x combo and higher</span> and increases damage dealt by 10% and successful <span class="mechanic">Counters</span> have a 50% chance to drop <span class="mechanic">Ammo</span>. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="rng">RUN-N-GUNNER</span>'],
      box2: [
        'Tier 1', 
        'Home Run Hitter', 
        '', 
        'Increases <span class="ability">Melee Damage</span> by 200% but increases <span class="ability">Melee Cooldown</span> by 2 seconds. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="mmm">SLUGGER</span>'],
      box3: [
        'Tier 1', 
        'Untouchable', 
        '', 
        'At <span class="combo">5x combo and higher</span>, <span class="mmm">Shield</span> capacity is increased by 20% and <span class="mechanic">Shield Harvest</span> chance by 25%. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="mmm">SLUGGER</span>'],
      box4: [
        'Tier 1', 
        'Battering Practice', 
        '', 
        'Increases <span class="ability">Melee Knockback Distance</span> by 200% on <span class="enemy">Grunt</span> enemies, but <span class="ability">Melee Cooldown</span> is increased by 1 second. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="mmm">SLUGGER</span>'],
      box5: [
        'Tier 1', 
        'Twinkletoes', 
        '', 
        'Every <span class="combo">10 combo</span> increases <span class="mechanic">Firearm</span> damage by 20% while <span class="mechanic">Airborne</span> and performing a <span class="ability">Grapple Attack</span> generates <span class="combo">2 Combo</span>. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="ows">FIRESTARTER</span> <br><span class="rng">RUN-N-GUN</span>'],
      box6: [
        'Tier 2',
        'Traumatic Experience',
        '',
        'Enemies <span class="ability">Hit</span> by your <span="ability">Melee</span> deal 50% less damage and take 25% more damage from <span="mechanic">Firearms</span> for 15 seconds. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="rng">RUN-N-GUNNER</span> <br><span class="mmm">SLUGGER</span>'],
      box7: [
        'Tier 2',
        'Bigger Bang',
        '',
        'Increases <span class="ability">Grenade Explosion</span> radius by 20% and <span class="ability">Grenade Ammo</span> capacity by 1. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="ows">FIRESTARTER</span>'],
      box8: [
        'Tier 2',
        'Leave a Mark',
        '',
        '<span class="ability">Melee Hits</span> now cause the enemy hit to <span class="ability">Bleed</span> for 50% of the <span class="ability">Melee Damage</span> caused as damage over time for 5 seconds, but increases <span class="ability">Melee Cooldown</span> by 1 second. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="mmm">SLUGGER</span>'],
      box9: [
        'Tier 2',
        'Suicide Strike',
        'Special Skill',
        '<span class="ability">Suicide Strike</span> is a powerful single-target attack that can be executed after having built up enough <span class="ability">Suicide Strike</span> resource. Harley\'s <span class="ability">Suicide Strike Kills</span> also drop <span class="mmm">Shield Pickups</span> for every Player in the <span class="ability">Squad</span>. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="mmm">SLUGGER</span>'],
      box10: [
        'Tier 2',
        'Headspinner',
        '',
        'Increases <span class="ability">Grapple Attack</span> damage by 50%. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="ows">FIRESTARTER</span>'],
      box11: [
        'Tier 2',
        'On the Hop',
        '',
        'Increases <span class="ability">Damage Reduction</span> by 20% while <span class="ability">Airborne</span> or using the <span class="ability">Bat-Drone</span>. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="rng">RUN-N-GUNNER</span>'],
      box12: [
        'Tier 2',
        'Trapeze Artist',
        '',
        'Increases damage dealt by 20% while using the <span class="ability">Bat-Drone</span>. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="rng">RUN-N-GUNNER</span>'],
      box13: [
        'Tier 3',
        'Hand Hand Cannons',
        '',
        'At <span class="combo">10x Combo and higher</span>, <span class="ability">Critical Hits</span> with <span class="ability">Pistols</span> have a 100% chance to cause enemies to <span class="ability">Bleed</span> for 40% of the damage dealt over 10 seconds. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="rng">RUN-N-GUNNER</span>'],
      box14: [
        'Tier 3',
        'Small But Deadly',
        '',
        '<span class="ability">SMG Kills</span> increase the damage of your next <span class="ability">Melee Hit</span> by 25%. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="rng">RUN-N-GUNNER</span> <br><span class="mmm">SLUGGER</span>'],
      box15: [
        'Tier 3'  ,
        'Bring Out the Big Guns',
        '',
        'At <span class="combo">10x Combo and higher</span>, <span class="ability">Critical Hits</span> with <span class="ability">Heavy Weapons</span> have a 100% chance to <span class="ability">Spread</span> 20% of the damage dealt to enemies within 10 meters. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="rng">RUN-N-GUNNER</span>'],
      box16: [
        'Tier 3',
        'Arkham Special',
        'Special Skill',
        '<span class="rng">Arkham Special</span> activates at <span class="combo">10x Combo and higher</span> and increases <span class="ability">Melee</span> damage by 30% and performaing a <span class="ability">Shield Harvest</span> had a 25% chance to drop <span class="ability">Grenade Ammo</span>. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="ows">FIRESTARTER</span> <br><span class="mmm">SLUGGER</span>'],
      box17: [
        'Tier 3',
        'What Goes Up',
        '',
        '<span class="ability">Grenade</span> damage is increased by 20% while <span class="ability">Airborne</span>. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="ows">FIRESTARTER</span> <br><span class="rng">RUN-N-GUNNER</span>'],
      box18: [
        'Tier 4',
        'Group Therapy',
        '',
        '<span class="ability">Hitting</span> 3 or more enemies with a <span class="ability">Grenade</span> generates 3 <span class="combo">Combo</span>. <br><br>RECOMMENDED PLAYSTYLES: <br><span class="ows">FIRESTARTER</span>'],
      box19: [
        'Tier 4',
        'Self-Care',
        '',
        'Enemy <span class="ability">Kills</span> regenerate 1% <span class="hp">Health</span> and 1% <span class="mmm">Shield</span>. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="ows">FIRESTARTER</span> <br><span class="rng">RUN-N-GUNNER</span> <br><span class="mmm">SLUGGER</span>'],
      box20: [
        'Tier 4',
        'Drone in the Zone',
        '',
        'At <span class="combo">10x Combo and higher</span>, performing a <span class="ability">Shield Harvest</span> generates 25% <span class="ability">Grapple Attack</span> resource. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="ows">FIRESTARTER</span> <br><span class="mmm">SLUGGER</span>'],
      box21: [
        'Tier 4',
        'Performance Art',
        '',
        '<span class="ability">Damage Reduction</span> is increased by 15%. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="rng">RUN-N-GUNNER</span>'],
      box22: [
        'Tier 4',
        'Elusiveness',
        '',
        '100% chance you won\'t lose any <span class="combo">Combo</span> when a <span class="combo">Combo Breaker</span> even triggers. This can only happen once every 30 seconds. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="ows">FIRESTARTER</span> <br><span class="rng">RUN-N-GUNNER</span> <br><span class="mmm">SLUGGER</span>'],
      box23: [
        'Tier 4',
        'Bird of Prey',
        '',
        '<span class="ability">Grapple Attack Kills</span> have a 25% chance to drop <span class="ability">Grenade Ammo</span>. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="ows">FIRESTARTER</span>'],
      box24: [
        'Tier 5',
        'Cherry Bomb',
        '',
        '<span class="ability">Grenade Hits</span> have a 25% chance to spawn an additional live <span class="ability">Grenade</span>. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="ows">FIRESTARTER</span>'],
      box25: [
        'Tier 5',
        'Reckless',
        '',
        '50% chance to instantly <span class="ability">Reload Firearms</span> after <span class="ability">Pistol Kills</span>. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="rng">RUN-N-GUNNER</span>'],
      box26: [
        'Tier 5',
        'Safety First',
        '',
        'Increases <span class="shield">Shield Overcharge</span> by 50% and <span class="mmm">Shield Pickup</span> amount by 25%. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="mmm">SLUGGER</span>'],
      box27: [
        'Tier 5',
        'Audience Participation',
        '',
        'Performing a <span class="ability">Suicide Strike</span> generates 5 additional <span class="combo">Combo</span>. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="mmm">SLUGGER</span>'],
      box28: [
        'Tier 5',
        'Quick Routine',
        '',
        '<span class="ability">Ground Evades</span> and <span class="ability">Ground Slides</span> increase the damage of your next <span class="ability">Melee Hit</span> by 100%. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="rng">RUN-N-GUNNER</span> <br><span class="mmm">SLUGGER</span>'],
      box29: [
        'Tier 5',
        'Slidin\'n Shrapnel',
        '',
        '<span class="ability">Ground Evades</span> and <span class="ability">Ground Slides</span> increase the damage of your next <span class="ability">Grenade</span> by 50%. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="ows">FIRESTARTER</span> <br><span class="rng">RUN-N-GUNNER</span>'],
      box30: [
        'Tier 5',
        'Combo Coaster',
        '',
        '<span class="ability">Ground Evades</span> and <span class="ability>Ground Slides</span> have a 100% chance of generating <span class="combo">Combo</span> while in <span class="ability">Combat</span>. This can only happen once every 10 seconds. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="rng">RUN-N-GUNNER</span>'],
      box31: [
        'Tier 6',
        'Bottle Rocket',
        '',
        'At <span class="combo">20x Combo and higher</span>, enemy <span class="ability">Kills</span> have a 50% chance to cause the enemy to <span class="ability">Explode</span>, dealing 50% of their maximum health as damage to enemies within 10 meters. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="ows">FIRESTARTER</span> <br><span class="rng">RUN-N-GUNNER</span> <br><span class="mmm">SLUGGER</span>'],
      box32: [
        'Tier 6',
        'Three Strikes',
        '',
        'At <span class="combo">20x Combo and higher</span>, hitting 3 different enemies with <span class="ability">Melee</span> increases the damage of your next <span class="ability">Melee Hit</span> by 300%. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="mmm">SLUGGER</span>'],
      box33: [
        'Tier 6',
        'Juggler\'s Delight',
        '',
        'At <span class="combo">20x Combo and higher</span>, being <span class="ability">Airborne</span> for 5 seconds increases the damage of your next <span class="ability">Grenade</span> by 50% and causes it to generate 5 additional <span class="combo">Combo</span>. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="ows">FIRESTARTER</span> <br><span class="rng">RUN-N-GUNNER</span>'],
      box34: [
        'Tier 7',
        'Grenade Parade',
        '',
        'Enemies <span class="ability">Hit</span> by your <span class="ability">Grenades</span> take 20% more damage for 10 seconds. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="ows">FIRESTARTER</span>'],
      box35: [
        'Tier 7',
        'Home Cookin\'',
        '',
        'At <span class="combo">20x Combo and higher</span>, performing a <span class="ability">Shield Harvest</span> increases the damage of your next <span class="ability">Grenade</span> by 50%. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="ows">FIRESTARTER</span> <br><span class="mmm">SLUGGER</span>'],
      box36: [
        'Tier 7',
        'Keep \'Em Comin\'',
        '',
        'At <span class="combo">20x Combo and higher</span>, <span class="ability">Suicide Strike Kills</span> generate 5 additional <span class="combo">Combo</span> and increase your <span class="ability">Melee</span> damage by 100% for 10 seconds. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="mmm">SLUGGER</span>'],
      box37: [
        'Tier 7',
        'Powder Keg',
        '',
        'Enemies <span class="ability">Hit</span> by your <span class="ability">Grenades</span> deal 25% less damage for 15 seconds. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="ows">FIRESTARTER</span>'],
      box38: [
        'Tier 7',
        'Elasticity',
        '',
        '50% of the damage from your last <span class="ability">Grapple Attack</span> is added to your next <span class="ability">Melee</span>. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="ows">FIRESTARTER</span> <br><span class="mmm">SLUGGER</span>'],
      box39: [
        'Tier 7',
        'Grandstander',
        '',
        'At <span class="combo">20x Combo and higher</span>, enemies <span class="ability">Hit</span> by your <span class="ability">Grapple Attack</span> deal 50% less damage for 20 seconds. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="ows">FIRESTARTER</span>'],
      box40: [
        'Tier 7',
        'A Grapple a Day...',
        '',
        'At <span class="combo">20x Combo and higher</span>, <span class="ability">Grapple Attack</span> damage is increased by 50%. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="ows">FIRESTARTER</span>'],
      box41: [
        'Tier 8',
        'Encore!',
        '',
        'At <span class="combo">30x Combo and higher</span>, performing a <span class="ability">Shiled Harvest</span> has a 100% chance to cause the enemy to <span class="ability">Bleed</span> for 50% of the damage dealt over 10 seconds. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="mmm">SLUGGER</span>'],
      box42: [
        'Tier 8',
        'Big Swinger',
        '',
        'At <span class="combo">30x Combo and higher</span>, damage dealt while <span class="ability">Moving</span> is increased by 75%. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="rng">RUN-N-GUNNER</span>'],
      box43: [
        'Tier 8',
        'Agent of Chaos',
        '',
        'At <span class="combo">30x Combo and higher</span>, if the <span class="combo">Combo Breaker</span> triggers while <span class="ability">Airborne</span>, your <span class="combo">Combo</span> won\'t break and instead you generate <span class="combo">10 Combo</span>. This can only happen once every 30 seconds. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="rng">RUN-N-GUNNER</span>'],
      box44: [
        'Tier 9',
        'Clown Smackdown',
        '',
        'Enemy <span class="ability">Kills</span> generate 10% <span class="ability">Suicide Strike</span> resource. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="mmm">SLUGGER</span>'],
      box45: [
        'Tier 9',
        'Boom, Bang, Pow!',
        '',
        'At <span class="combo">30x Combo and higher</span>, 300% of the damage from the last 3 <span class="ability">Pistol Hits</span> are added to your next <span class="ability">Melee Hit</span>. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="rng">RUN-N-GUNNER</span> <br><span class="mmm">SLUGGER</span>'],
      box46: [
        'Tier 9',
        'Tightrope Act',
        '',
        'At <span class="combo">30x Combo and higher</span>, every 1 additional <span class="combo">Combo</span> gives you a 5% chance to cheat death and instantly regenerates 100% <span class="hp">Health</span> and 25% <span class="mmm">Shield</span>. This can only happen once every 120 seconds. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="rng">RUN-N-GUNNER</span> <br><span class="ows">FIRESTARTER</span> <br><span class="mmm">SLUGGER</span>'],
      box47: [
        'Tier 9',
        'The \'Ol One-Two',
        '',
        'Performing a <span class="ability">Shield Harvest</span> has a 20% chance to increase <span class="ability">Suicide Strike</span> damage by 250% for 60 seconds. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="mmm">SLUGGER</span>'],
      box48: [
        'Tier 9',
        'Squad Ultimate',
        'Special Skill',
        'Unlocks Harley Quinn\'s ability to trigger <span class="ability">Squad Ultimate</span>. This slows down enemies and locks down vehicles around the <span class="ability">Squad</span> for 30 seconds. Activate it by pressing "G" when the <span class="ability">Squad Meter</span> is fully charged. Using this ability depletes the meter for all <span class="ability">Squad</span> members. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="ows">FIRESTARTER</span> <br><span class="rng">RUN-N-GUNNER</span> <br><span class="mmm">SLUGGER</span>'],
      box49: [
        'Tier 10',
        'The Ballerina',
        'Special Skill',
        'Transforms <span class="rng">CARNEVIL</span> into <span class="rng">THE BALLERINA</span>. This requires <span class="combo">40x Combo and higher</span> and increases <span class="ability">Firearm</span> damage by 75%, <span class="ability">Grenade</span> damage by 50% and <span class="ability">Melee</span> damage by 100%. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="ows">FIRESTARTER</span> <br><span class="rng">RUN-N-GUNNER</span> <br><span class="mmm">SLUGGER</span>'],
      box50: [
        'Tier 10',
        'The Show Must Go On',
        '',
        'Increases maximum <span class="combo">Combo</span> by 10 and if the <span class="combo">Combo Breaker</span> triggers at <span class="combo">10x Combo and higher</span>, you regenerate 10 <span class="combo">Combo</span>. This can only happen once every 60 seconds. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="ows">FIRESTARTER</span> <br><span class="rng">RUN-N-GUNNER</span> <br><span class="mmm">SLUGGER</span>'],
      box51: [
        'Tier 10',
        'Intensive Treatment',
        'Special Skill',
        'Tranforms <span class="rng">CARNEVIL</span> into <span class="rng>INTENSIVE TREATMENT</span>. This requires <span class="combo">40x Combo and higher</span> and increases <span class="ability">Damage Reduction</span> by 50%, <span class="mmm">Shield</span> capacity by 100% and <span class="ability">Shield Harvest</span> chance by 50%. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="ows">FIRESTARTER</span> <br><span class="rng">RUN-N-GUNNER</span> <br><span class="mmm">SLUGGER</span>'],
      box52: [
        'Tier 10',
        'Kiss Kiss Stab Stab',
        'Special Skill',
        'Transforms <span class="rng">ARKHAM SPECIAL</span> into <span class="rng">KISS KISS STAB STAB</span>. This requires <span class="combo">50x Combo and higher</span> and increases <span class="ability">Melee</span> damage by 300% and <span class="mmm">Shield</span> capacity by 50%. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="mmm">SLUGGER</span>'],
      box53: [
        'Tier 10',
        'Workin\' Overtime',
        '',
        'At <span class="combo">Max Combo</span>, every 1 second spent <span class="ability">Airborne</span> generates 5% <span class="ability">Grapple Attack</span> resource. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="ows">FIRESTARTER</span> <br><span class="rng">RUN-N-GUNNER</span>'],
      box54: [
        'Tier 10',
        'Kiss Kiss Bang Bang',
        '',
        'Transforms <span class="rng">ARKHAM SPECIAL</span> into <span class="rng">KISS KISS BANG BANG</span>. This requires <span class="combo">50x Combo and higher</span> and increases <span class="ability">Firearm</span> damage by 150% and <span class="ability">Grenade</span> damage by 100%. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="ows">FIRESTARTER</span> <br><span class="rng">RUN-N-GUNNER</span>'],
      box55: [
        'Tier 10',
        'Ultimate Thrillride',
        '',
        'Increases <span class="ability">Grapple Attack</span> damage by 150% and <span class="ability">Suicide Strike</span> damage by 300% while the <span class="ability">Squad Ultimate</span> is active. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="ows">FIRESTARTER</span> <br><span class="mmm">SLUGGER</span>'],
      box56: [
        'Tier 10',
        'Ultimate Refresher',
        '',
        'Regenerates 100% <span class="hp">Health</span> and 200% <span class="mmm">Shield</span> when the <span class="ability">Squad Ultimate</span> is activated. <br><br>RECOMMENDED PLAYSTYLE: <br><span class="ows">FIRESTARTER</span> <br><span class="rng">RUN-N-GUNNER</span> <br><span class="mmm">SLUGGER</span>'],
    };
  
    function changeContent(boxId) {
      const content = contentMap[boxId];
      sections.forEach((section, index) => {
        section.innerHTML = content[index];
      });
    }
  
    talents.forEach(box => {
      box.addEventListener('mouseover', () => {
        const boxId = box.id;
        changeContent(boxId);
      });
    });
  }); 


  function selectedTNK(element, backgroundImage, defaultImage) {
    if (element.classList.contains('tnk-clicked')) {
        element.style.backgroundImage = "url('" + defaultImage + "')";
        element.classList.remove('tnk-clicked');
    } else {
        element.style.backgroundImage = "url('" + backgroundImage + "')";
        element.classList.add('tnk-clicked');
    }
  }

  function selectedMMM(element, backgroundImage, defaultImage) {
    if (element.classList.contains('mmm-clicked')) {
        element.style.backgroundImage = "url('" + defaultImage + "')";
        element.classList.remove('mmm-clicked');
    } else {
        element.style.backgroundImage = "url('" + backgroundImage + "')";
        element.classList.add('mmm-clicked');
    }
  }

  function selectedOWS(element, backgroundImage, defaultImage) {
    if (element.classList.contains('ows-clicked')) {
        element.style.backgroundImage = "url('" + defaultImage + "')";
        element.classList.remove('ows-clicked');
    } else {
        element.style.backgroundImage = "url('" + backgroundImage + "')";
        element.classList.add('ows-clicked');
    }
  }