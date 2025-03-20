Feature: Post

  @postcreate
  Scenario Outline: Create post button
    Given I open the login page for "<env>"
    When I login with username "<username>" and password "<password>"
    Then I should be redirected to the dashboard
    Given Je suis sur le dashboard
    And je clique sur le bouton add post
    Then je suis redirige vers la page de creation de post
    And je creer un post avec "super titre" et "super content" et je clique sur le bouton save
    Then je vois mon super post dans la liste des posts

    @env1
    Examples:
      | env  | username            | password   |
      | env1 | testeur_integration | testeur_qa |

    @env2
    Examples:
      | env  | username        | password     |
      | env2 | testeur_recette | testeur_qa_3 |

  @post
  Scenario Outline: Create post button
    Given I open the login page for "<env>"
    When I login with username "<username>" and password "<password>"
    Then I should be redirected to the dashboard
    Given Je suis sur le dashboard
    And je clique sur le bouton add post
    Then je suis redirige vers la page de creation de post
    And je creer un post avec "" et "super content" et je clique sur le bouton save
    Then un message derreur saffiche

    @env1
    Examples:
      | env  | username            | password   |
      | env1 | testeur_integration | testeur_qa |

    @env2
    Examples:
      | env  | username        | password     |
      | env2 | testeur_recette | testeur_qa_3 |

  @post
  Scenario Outline: Create post button
    Given I open the login page for "<env>"
    When I login with username "<username>" and password "<password>"
    Then I should be redirected to the dashboard
    Given Je suis sur le dashboard
    And je clique sur le bouton add post
    Then je suis redirige vers la page de creation de post
    And je creer un post avec "titre" et "" et je clique sur le bouton save
    Then un message derreur saffiche

    @env1
    Examples:
      | env  | username            | password   |
      | env1 | testeur_integration | testeur_qa |

    @env2
    Examples:
      | env  | username        | password     |
      | env2 | testeur_recette | testeur_qa_3 |
