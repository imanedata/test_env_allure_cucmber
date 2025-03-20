
@ignore
Feature: Dashboard

  Background:
    Given I open the login page for "<env>"
    When I login with username "testeur_integration" and password "testeur_qa"
    Then I should be redirected to the dashboard

  @dashboard
  Scenario: Create post button
    Given Je suis sur le dashboard
    And je clique sur le bouton add post
    Then je suis redirige vers la page de creation de post


# Background:
# Given I open the login page
# When I login with username "testeur_integration" and password "testeur_qa"
# Then I should be redirected to the dashboard

# @post
# Scenario: Create post button
# Given Je suis sur le dashbard
# And je clique sur le bouton add post
# Then je suis rediriger vers la page de creation de post

# And je rensigne le titre " TITRE 1 " et " DESCRIPTION BLABLABLA
# Then the post should be created successfully
